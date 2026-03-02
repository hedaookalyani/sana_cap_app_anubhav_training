const cds = require('@sap/cds')

module.exports = class MyService extends cds.ApplicationService { init() {



  this.on ('Kalyani', async (req) => {
    console.log('On Kalyani', req.data)
    //only focus on business logic
    const userName = req.data.name
    return "Hey Amigio !! Welcome " + userName;
  })

  return super.init()
}}
