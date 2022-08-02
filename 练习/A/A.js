//定义数据
var data = [
    {
        "id": 1,
        "goods_name": "vivo 手机 p30",
        "price": 1242
    },
    {
        "id": 2,
        "goods_name": "苹果手机 iphone plus",
        "price": 45000
    },
    {
        "id": 3,
        "goods_name": "宝马 X7 4驱",
        "price": 750000
    },
    {
        "id": 4,
        "goods_name": "宝马 5系 2驱",
        "price": 450000
    },
    {
        "id": 5,
        "goods_name": "锤子手机 200G",
        "price": 2000
    },
    {
        "id": 6,
        "goods_name": "华为手机 P40",
        "price": 5000
    },
    {
        "id": 7,
        "goods_name": "红米 手机",
        "price": 1200
    },
    {
        "id": 8,
        "goods_name": "海尔电冰箱 3匹",
        "price": 980
    },
    {
        "id": 9,
        "goods_name": "苹果笔记本电脑 i9",
        "price": 20000
    },
    {
        "id": 10,
        "goods_name": "精品手机 华为 200G",
        "price": 3200
    }
];
/**
 * 全局获取tbody标签
 */
// let table: HTMLTableElement = document.getElementsByTagName('table')[0]
getlist(data);
// 渲染页面
function getlist(datalist) {
    var tbody = document.querySelector('tbody');
    tbody.innerText = "";
    for (var i = 0; i < datalist.length; i++) {
        var tr = document.createElement('tr');
        tr.innerHTML = "\n        <td>".concat(datalist[i].id, "</td>\n        <td>").concat(datalist[i].goods_name, "</td>\n        <td>").concat(datalist[i].price, "</td>\n ");
        tbody.appendChild(tr);
    }
}
// function ss(event): void {
//     // console.log(event.target.value);
//     let a: Array<State> = []
//     if (event.target.value) {
//         a = datalist.filter(item => {
//             return item.goods_name.includes(event.target.value)
//         })
//     }
//     getlist()
// }
// id排序
var ids = false;
function sortsid(event) {
    ids = !ids;
    var sorts = [];
    sorts = data.sort(function (a, b) {
        return ids ? b.id - a.id : a.id - b.id;
    });
    getlist(sorts);
}
// 价格排序
var pics = false;
function sortpic(event) {
    pics = !pics;
    var sortpics = [];
    sortpics = data.sort(function (a, b) {
        return pics ? b.price - a.price : a.price - b.price;
    });
    getlist(sortpics);
}
// 分页
// 定义数据
var pagesize = 10;
var pagenum = Math.ceil(data.length / pagesize);
pagenumss(pagenum);
var nums = document.getElementsByTagName('input')[1];
nums.value = "".concat(pagesize);
// 输入页数调用函数
function pagenumss(numss) {
    var sizenums = [];
    var num = 1;
    for (var i = 0; i < numss; i++) {
        sizenums.push(num++);
    }
    var ul = document.getElementsByTagName('ul')[0];
    ul.innerHTML = "";
    sizenums.forEach(function (item) {
        var li = document.createElement('li');
        li.innerHTML = "\n        ".concat(item, "\n    ");
        ul.appendChild(li);
        li.onclick = function () {
            console.log(item);
            var getnumarr = [];
            getnumarr = data.slice(((item - 1) * pagesize), item * pagesize);
            getlist(getnumarr);
        };
    });
}
// 点击页码调用函数
function getpagesize(event) {
    if (event.keyCode == 13) {
        console.log(event.target.value);
        pagesize = event.target.value;
        pagenum = Math.ceil(data.length / pagesize);
        pagenumss(pagenum);
        var getpagearr = [];
        getpagearr = data.slice(((pagenum - 1) * pagesize), pagenum * pagesize);
        getlist(getpagearr);
    }
}
