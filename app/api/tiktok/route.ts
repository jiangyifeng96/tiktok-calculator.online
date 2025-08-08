import { NextRequest, NextResponse } from 'next/server';

export interface TikTokApiResponse {
  status: boolean;
  user_id?: string;
  username?: string;
  fullname?: string;
  avatar?: string;
  bio?: string;
  verified?: boolean;
  followers?: number;
  hearts?: number;
  videos?: number;
  earnings?: number;
}

export interface TikTokCalculatorResult {
  success: boolean;
  data?: {
    username: string;
    fullname: string;
    followers: number;
    hearts: number;
    videos: number;
    earnings: number;
    estimatedEarningsPerVideo: number;
    engagementRate: number;
  };
  error?: string;
}

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const username = searchParams.get('username');

    if (!username) {
      return NextResponse.json<TikTokCalculatorResult>({
        success: false,
        error: 'Username is required'
      }, { status: 400 });
    }

    // 清理用户名，移除@符号和空格
    const cleanUsername = username.replace(/[@\s]/g, '').toLowerCase();

    if (!cleanUsername) {
      return NextResponse.json<TikTokCalculatorResult>({
        success: false,
        error: 'Invalid username'
      }, { status: 400 });
    }

    // 调用第三方API
    const apiUrl = `https://tikcalculator.com/result?username=${encodeURIComponent(cleanUsername)}`;
    
    const cookies = {
      'session_data': 'b08cf54ce352047f3a1b1ab523a086a5',
      '_ga': 'GA1.1.1314364166.1754636872',
      '__gads': 'ID=08a78c91e41e7e4e:T=1754636873:RT=1754638568:S=ALNI_MZDg_k-hICasriCfjrcyxS6BCwPxQ',
      '__gpi': 'UID=0000117cae251a4f:T=1754636873:RT=1754638568:S=ALNI_MYXtk0h3gOn4c5yedKu0OLdZw123g',
      '__eoi': 'ID=a5a7aa41d8b6a1c9:T=1754636873:RT=1754638568:S=AA-AfjaM1kxtx-F6AVJwuOlZ0NBr',
      'FCNEC': '%5B%5B%22AKsRol9vpFL49MJufVuyqMxG99qlRPpJR20_pHNK3Ee6Z8P8so8dpxPyFVk7Zgqj9oWHZV9GmhwQBV6dFCphMjMobgj5-xOyioRWninvBM2E6EsXLLfNER0aEgANGIYpVv32sq1QkQHSpo5QTw6W9BGd4dJu9jxuLw%3D%3D%22%5D%5D',
      '_ga_FTR2D3TS7W': 'GS2.1.s1754636872$o1$g1$t1754640376$j21$l0$h0',
    };

    const cookieString = Object.entries(cookies)
      .map(([key, value]) => `${key}=${value}`)
      .join('; ');

    const response = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        'accept': '*/*',
        'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8',
        'priority': 'u=1, i',
        'referer': 'https://tikcalculator.com/',
        'sec-ch-ua': '"Not)A;Brand";v="8", "Chromium";v="138", "Google Chrome";v="138"',
        'sec-ch-ua-mobile': '?0',
        'sec-ch-ua-platform': '"macOS"',
        'sec-fetch-dest': 'empty',
        'sec-fetch-mode': 'cors',
        'sec-fetch-site': 'same-origin',
        'user-agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/138.0.0.0 Safari/537.36',
        'cookie': cookieString,
      },
    });

    if (!response.ok) {
      throw new Error(`API request failed: ${response.status}`);
    }

    const apiData: TikTokApiResponse = await response.json();

    // 检查API返回状态
    if (!apiData.status || !apiData.username) {
      return NextResponse.json<TikTokCalculatorResult>({
        success: false,
        error: '暂无查询数据'
      });
    }

    // 计算额外指标
    const estimatedEarningsPerVideo = apiData.videos && apiData.videos > 0 
      ? (apiData.earnings || 0) / apiData.videos 
      : 0;

    const engagementRate = apiData.followers && apiData.followers > 0 
      ? ((apiData.hearts || 0) / (apiData.followers * (apiData.videos || 1))) * 100
      : 0;

    return NextResponse.json<TikTokCalculatorResult>({
      success: true,
      data: {
        username: apiData.username,
        fullname: apiData.fullname || apiData.username,
        followers: apiData.followers || 0,
        hearts: apiData.hearts || 0,
        videos: apiData.videos || 0,
        earnings: apiData.earnings || 0,
        estimatedEarningsPerVideo: Math.round(estimatedEarningsPerVideo * 100) / 100,
        engagementRate: Math.round(engagementRate * 100) / 100,
      }
    });

  } catch (error) {
    console.error('TikTok API Error:', error);
    return NextResponse.json<TikTokCalculatorResult>({
      success: false,
      error: '暂无查询数据'
    }, { status: 500 });
  }
}
