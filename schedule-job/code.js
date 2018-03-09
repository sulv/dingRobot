const schedule = require('node-schedule');

const rp = require('request-promise');

module.exports =  async (rule) => {
  return schedule.scheduleJob(rule, async () => {
    let options = {
      method: 'POST',
      uri: 'https://oapi.dingtalk.com/robot/send?access_token=0c3862af62777dc100f0ae8d85861ca26c1387fbc804a7c47303b1b2bcaae37a',
      body: {
        msgtype: 'text',
        text: {
          content: ''
        },
        at: {
          atMobiles: [
            ''
          ],
          isAtAll: true
        },
      },
      json: true
    }
    try {
      let res = await rp(options)
      console.log(res)
    }catch(e) {
      console.log(e);
    }
  })
};

 