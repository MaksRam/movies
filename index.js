const Koa = require('koa')
const app = new Koa();

const mainRouter = require('./lib/routes/router')

const port = 3000;

app.use(mainRouter.routes());

app.listen(port, () => {
    console.log(`Service is running on http://localhost:3000`);
  });