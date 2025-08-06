import { markdownToHtml } from '@/lib/markdownToHtml'
import { getPostBySlug } from '@/utils'

export default async function Page() {
  const htmlContent = await markdownToHtml(getPostBySlug('welcome'))

  return <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
}
