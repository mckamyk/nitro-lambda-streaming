import { setCookie } from 'h3'

const sleep = (n: number) => new Promise((r) => setTimeout(r, n))

export default defineEventHandler((event) => {
  setCookie(event, 'test', Math.floor(Math.random() * 1000).toString())
  setHeader(event, 'content-type', 'text/plain')

  const reader = new ReadableStream({
    async start(controller) {
      const lines = [
        'This is a test of nitrojs + h3 in a streamed lambda.',
        'Actually, this is to test to make sure cookies are being sent correctly',
        'Check the request in the dev tools for its headers.',
        'Depending on your browser, they might not show up until after it finishes.',
        "I'll keep streaming for a bit longer.",
      ]

      for (const l of lines) {
        controller.enqueue(l + '\n')
        await sleep(1000)
      }

      for (let i = 1; i < 10; i++) {
        controller.enqueue(i + '\n')
        await sleep(1000)
      }
      controller.enqueue('ending now\n')
      controller.close()
    },
  })

  return reader
})
