/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: 'nitro-app',
      removal: input?.stage === 'production' ? 'retain' : 'remove',
      protect: ['production'].includes(input?.stage),
      home: 'aws',
    }
  },
  async run() {
    new sst.aws.Function('TestFunction', {
      handler: '.output/server/index.handler',
      streaming: true,
      timeout: '1 minutes',
      url: true,
    })

    new sst.aws.StaticSite('Site', {
      path: './site',
    })
  },
})
