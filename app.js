/*引入所需模块*/
const express = require('express');
const mysql = require('mysql');
const weChat = require('wechat');
/*创建服务器*/
let app = new express();
// app.use(express.query());
let config = {
    appid: 'wx1fab426e32750bf5',
    token: 'weixin',
    EncodingAESKey: 'tQNYNzap9ve0GUXfgLSPwFrWWYv6Kyz8QqFwZs0qyha',
    checkSignature: true
}
/*创建连接池*/
let pool = mysql.createPool({
    host: '127.0.0.1',
    user: 'root',
    password: '',
    database: 'chat',
    port: 3306
});

app.use('/', weChat(config, (req, res) => {
    let message = req.weixin;
    let content = message.Content;

    console.log(content);
    /*从连接池中 获取一个连接*/
    let sql = 'SELECT answer FROM dialogue WHERE question LIKE ?';
    pool.getConnection((err,conn) => {
        if(err){
            throw err;
        }
        conn.query(sql, [`%${content}%`], (err, result) => {
            if(err){
                throw err+'nh';
            }
            console.log(result);
            if(result.length === 1){
                res.reply(result[0].answer);
            }else{
                res.reply('byebye');
            }
        })
    })
}))
app.listen(8001);

