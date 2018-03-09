const Koa = require('koa')
const app = new Koa()
const bodyParser = require('koa-bodyparser')
const router = require('./router');

app.use(bodyParser())

app.use(async (ctx, next) => {
  console.log(ctx)
  next()
});

app.use(router.routes());

app.listen(9999, (err) => err ? console.log(err) : console.log('⚡⚡⚡⚡ server start at 9999 ⚡⚡⚡⚡'));