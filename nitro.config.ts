//https://nitro.unjs.io/config
export default defineNitroConfig({
  srcDir: 'server',
  preset: 'aws-lambda',

  awsLambda: {
    streaming: true,
  },

  compatibilityDate: '2025-03-17',
})
