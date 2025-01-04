import koa from 'koa';
import serve from "koa-static";
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url"; 

const __dirname = fileURLToPath(new URL(".", import.meta.url));

const web = new koa();
const webStaticPath = path.resolve(__dirname, '..', 'web', 'dist');
web.use(serve(webStaticPath));
web.use(async (ctx) => {
  const filePath = path.join(webStaticPath, ctx.path);
  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    ctx.type = path.extname(filePath);
    ctx.body = fs.createReadStream(filePath);
  } else {
    ctx.type = 'text/html';
    ctx.body = fs.createReadStream(path.join(webStaticPath, 'index.html'));
  }
});
web.listen(3001, () => {
  console.log('Web Server is running on http://localhost:3001');
});

const admin = new koa();
const adminStaticPath = path.resolve(__dirname, '..', 'admin', 'dist');
admin.use(serve(adminStaticPath));
admin.use(async (ctx) => {
  const filePath = path.join(adminStaticPath, ctx.path);
  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    ctx.type = path.extname(filePath);
    ctx.body = fs.createReadStream(filePath);
  } else {
    ctx.type = 'text/html';
    ctx.body = fs.createReadStream(path.join(adminStaticPath, 'index.html'));
  }
});
admin.listen(3002, () => {
  console.log('Web Server is running on http://localhost:3002');
});

const cms = new koa();
const cmsStaticPath = path.resolve(__dirname, '..', 'cms', 'dist');
cms.use(serve(cmsStaticPath));
cms.use(async (ctx) => {
  const filePath = path.join(cmsStaticPath, ctx.path);
  if (fs.existsSync(filePath) && fs.lstatSync(filePath).isFile()) {
    ctx.type = path.extname(filePath);
    ctx.body = fs.createReadStream(filePath);
  } else {
    ctx.type = 'text/html';
    ctx.body = fs.createReadStream(path.join(cmsStaticPath, 'index.html'));
  }
});
cms.listen(3003, () => {
  console.log('Web Server is running on http://localhost:3003');
});

