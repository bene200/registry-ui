exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['spec.js'],
  params: {
    url: "http://localhost:80/client"
  }
}
