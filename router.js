const Router = require('koa-router');

const router = new Router();

// const {getTaskList, postTask, getTaskDetail} = require('./controller/task.js')
const task = require('./controller/task');
console.log(task);
router.get('/task/list', task.getTaskList);
// router.get('/task/:id', getTaskDetail);
// router.post('/task/:id', async (postTask));
// router.post('/task/:id/start', async (startTask));

module.exports = router;