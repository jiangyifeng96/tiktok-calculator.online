
export type BlogPost = {
  locale?: string
  title: string
  description?: string
  date: Date
  slug: string
  content: string
  metadata: {
    [key: string]: any
  },
}
