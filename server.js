const puppeteer = require('puppeteer');

let funcs = [];

function forwardToWs(data) {
    // console.log(data);
    funcs = funcs.filter(function(ws) {
        try {
            ws.send(data)
        } catch(e) {
            console.error(e)
            return false;
        }
        return true;
    });
}

async function capture(page) {
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
        console.log(`收到 WebSocket 消息：`, params.response)
        // callback(params.response.payloadData);
    })
    client.on('Network.webSocketWillSendHandshakeRequest', (params) => {
        console.log(`准备发送 WebSocket 握手消息`)
    })
    client.on('Network.webSocketHandshakeResponseReceived', (params) => {
        console.log(`接收到 WebSocket 握手消息`)
    })
}

async function otherPage(browser) {
    const page = await browser.newPage();
    await capture(page, forwardToWs)
}

async function start() {
    const browser = await puppeteer.launch({headless: false});
    const page = await browser.newPage();
    await capture(page)
    // await page.goto("https://live.douyin.com/412583216850?cover_type=&enter_from_merge=web_related_page&enter_method=web_card&game_name=%E6%97%85%E8%A1%8C&is_recommend=1&live_type=game&more_detail=&room_id=7181767947298294539&stream_type=vertical&title_type=1&web_live_page=entertainment_7181767947298294539&web_live_tab=7181767947298294539")
    await page.goto("http://kedou.workerman.net/")
}

start().then()

// (async () => {
//     const browser = await puppeteer.launch({headless: false});
//     const page = await browser.newPage();
//     //创建 CDP 会话
//     let cdpSession = await page.target().createCDPSession();
//     //开启网络调试,监听 Chrome DevTools Protocol 中 Network 相关事件
//     await cdpSession.send('Network.enable');
//     //监听 webSocketFrameReceived 事件，获取对应的数据
//     cdpSession.on('Network.webSocketFrameReceived', frame => {
//         let payloadData = frame.response.payloadData;
//         console.log('获取到websocket接口数据：', payloadData);
//         if(payloadData.includes('push:query')){
//             //解析payloadData，拿到服务端推送的数据
//             let res = JSON.parse(payloadData.match(/\{.*\}/)[0]);
//             if(res.code !== 200){
//                 console.log(`调用websocket接口出错:code=${res.code},message=${res.message}`);
//             }else{
//                 console.log('获取到websocket接口数据：', res.result);
//             }
//         }
//     });
//     cdpSession.on('Network.webSocketWillSendHandshakeRequest', function(params){
//         console.log(`准备发送 WebSocket 握手消息`)
//     })
//     cdpSession.on('Network.webSocketHandshakeResponseReceived', function(params){
//         console.log(`接收到 WebSocket 握手消息`)
//     })
//     await page.goto('http://kedou.workerman.net');
//     // await page.waitForFunction('window.renderdone', {polling: 20});
//     // await page.close();
//     // await browser.close();
// })();