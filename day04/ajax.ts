// /**
//  * 原始ajax
//  */
// //创建ajax
// let ajax = new XMLHttpRequest()
// //制定发送方法和url
// ajax.open('get', 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')
// //发送数据
// ajax.send()
// //判断是不是返回成功和状态码
// ajax.onreadystatechange = function () {
//     if (ajax.status === 200 && ajax.readyState === 4) {
//         console.log(ajax.response);
//     }
// }

// enum Status{
//     Success=400,
//     readyState=4
// }

// interface Iparams{
//     method:string,
//     url:string,
//     data?:any
// }

// function getAjax(params:Iparams){
//    let ajax=new XMLHttpRequest
//     ajax.open(params.method,params.url)
//     ajax.send(params.data)
//     ajax.onreadystatechange=function(){
//         if (ajax.status===Status.Success&& ajax.readyState===Status.readyState) {
//             console.log('成功');
//         }
//     }
// }

// const params={methdo:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}
// // getAjax(Iparams)


// let ajax= new XMLHttpRequest()

// ajax.open('get','https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')

// ajax.send()

// ajax.onreadystatechange=function(){
//     if (ajax.status===200 && ajax.readyState===4) {
//         console.log(ajax.response);
//     }
// }

// enum Status{
//     Success=400,
//     readyState=4
// }

// interface Iparams{
//     method:string,
//     url:string,
//     data?:any
// }

// function getAjax(params:Iparams){
//     let ajax=new XMLHttpRequest()
//     ajax.open(params.method,params.url)
//     ajax.send(params.data)
//     if (ajax.status===Status.Success && ajax.readyState===Status.readyState) {
//         console.log('成功');
//     }
// }
// const params={method:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}

let ajax=new XMLHttpRequest

ajax.open('get','https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata')

ajax.send()

ajax.onreadystatechange=function(){
    if (ajax.status==400 && ajax.readyState==4) {
        console.log(ajax.response);
    }
}

enum Status{
    Success=400,
    readyState=4
}

interface Iparams{
    method:string,
    url:string,
    data?:any
}


function getAjax(params){
    let ajax=new XMLHttpRequest
    ajax.open(params.method,params.url)
    ajax.send(params.data)
    if (ajax.status===Status.Success && ajax.readyState===Status.readyState) {
        console.log('成功');
    }
}
const params={method:'get',url:'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata'}
