const schedule = require('node-schedule');

const rp = require('request-promise');

module.exports =  async (rule) => {
  return schedule.scheduleJob(rule, async () => {
    let options = {
      method: 'POST',
      uri: 'https://oapi.dingtalk.com/robot/send?access_token=0c3862af62777dc100f0ae8d85861ca26c1387fbc804a7c47303b1b2bcaae37a',
      body: {
        "actionCard": {
            "title": "乔布斯 20 年前想打造一间苹果咖啡厅，而它正是 Apple Store 的前身", 
            "text": "![screenshot](@lADOpwk3K80C0M0FoA) ### 乔布斯 20 年前想打造的苹果咖啡厅 Apple Store 的设计正从原来满满的科技感走向生活化，而其生活化的走向其实可以追溯到 20 年前苹果一个建立咖啡馆的计划", 
            "hideAvatar": "0", 
            "btnOrientation": "0", 
            "singleTitle" : "阅读全文",
            "singleURL" : "https://www.dingtalk.com/"
        }, 
        "msgtype": "actionCard"
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

 