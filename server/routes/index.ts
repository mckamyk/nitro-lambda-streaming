import { setCookie, setHeader } from 'h3'

export default defineEventHandler((event) => {
  setCookie(event, 'test', 'foobarbinbaz')
  setHeader(event, 'content-type', 'text/plain')
  setHeader(event, 'test-header', 'foobarbinbaz')
  return 'Start by editing <code>server/routes/index.ts</code>.'
})
