const puppeteer = require('puppeteer');

const ws = require('nodejs-websocket');
const POST = 10024;

async function listenWebsocket(page) {
    const client = await page.target().createCDPSession()
    await client.send('Network.enable')
    client.on('Network.webSocketCreated', (params) => {
        console.log(`创建 WebSocket 连接：${params.url}`)
    })
    client.on('Network.webSocketClosed', (params) => {
        console.log(`WebSocket 连接关闭`)
    })
    client.on('Network.webSocketFrameSent', (params) => {
        // console.log(`发送 WebSocket 消息：${params.response.payloadData}`)
    })
    client.on('Network.webSocketFrameReceived', (params) => {
        // console.log(`收到 WebSocket 消息：`, params.response)
        const data = params.response.payloadData
        try {
            const {res_decode} = require("./douyin")
            const arr = res_decode(data)
            for (const obj of arr) {
                if (obj.content) {
                    console.log(``, obj.content)
                }
            }
        }catch (e) {
            console.log("报错", e)
        }
        // callback(params.response.payloadData);
    })
    client.on('Network.webSocketWillSendHandshakeRequest', (params) => {
        console.log(`准备发送 WebSocket 握手消息`)
    })
    client.on('Network.webSocketHandshakeResponseReceived', (params) => {
        console.log(`接收到 WebSocket 握手消息`)
    })
}

function sleep() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(' enough sleep~');
        }, 20000);
    })
}

async function start() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    // await listenWebsocket(page)
    // await page.goto("https://live.douyin.com/20928596860")


    await page.goto("https://channels.weixin.qq.com/platform/live/liveBuild")
    // await page.goto("http://kedou.workerman.net/")

    await sleep()
    // const cookies = await page.cookies();
    // console.log(cookies)
}

start().then()


const server = ws.createServer(connect => {
    let isArr = []
    let i = 0
    connect.on("text", data => {
        console.log("received: "+data);
        let obj = {}
        const arr = ["重庆", "北京", "上海"]
        var index = Math.floor((Math.random()*arr.length));
        if (!isArr[i]) {
            obj = {
                userId: i,
                userName: i + "发发发",
                content: arr[index],
                value: 1,
            }
            isArr[i] = true
        } else {
            obj = {
                userId: i,
                userName: i + "发发发",
                content: "1",
                value: 1,
            }
        }
        i++
        connect.sendText(JSON.stringify(obj));
    });

    connect.on("close", (code, reason) => {
        console.log("connection closed!");
    });

    connect.on('error', ()=>{
        console.log("connection error!");
    });
});

// server.listen(POST, ()=>{
//     console.log("websocket server start success!");
// });