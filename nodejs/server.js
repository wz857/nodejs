//express_demo.js 文件
var express = require('express');
var app = express();

const http = require("http")

app.get('/', function (req, res) {
    const url = "http://18.180.10.46:9090/"
    var html = ""
    http.get(url, (rs) => {
        rs.on("data", (data) => {
            html += data
        })
        rs.on("end", () => {
            console.log(html)
            res.send(html);
        })
    }).on("error", (e) => {
        console.log(`获取数据失败: ${e.message}`)
    })

    
})

var server = app.listen(3000, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})

