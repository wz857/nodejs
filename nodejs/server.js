
var http = require('http');
var querystring = require('querystring');
var options = {
        host: '18.180.10.46:9090', // 请求地址 域名，google.com等..
        port:9090,
        path:path, // 具体路径eg:/upload
        method: 'GET', // 请求方式, 这里以post为例
        headers: { // 必选信息,  可以抓包工看一下
            'Content-Type': 'application/json'
        }
    };
    http.get(options, function(res) {
        var resData = "";
        res.on("data",function(data){
            resData += data;
        });
        res.on("end", function() {
            callback(null,JSON.parse(resData));
        });
    })
const Koa = require('koa');
const app = new Koa();
app.use(async ctx => {
  ctx.body = 'Hello docker';
});
app.listen(3000);


