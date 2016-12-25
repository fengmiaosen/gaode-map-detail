/**
 * Created by fengmiaosen on 2016/12/24.
 */
let mapObj = null;
let MAX_LEN = 20;

function setSize() {
    let leftBox = $('.left-box');
    let inputBox = $('.input-box');
    let resBox = $('.result-box');
    let ptop = 10;
    let h = leftBox.innerHeight() - inputBox.outerHeight(true) - ptop;

    resBox.outerHeight(h);
}

function initialize() {
    setSize();

    // 创建地图
    let pos = new AMap.LngLat(116.397428, 39.90923);

    mapObj = new AMap.Map("container", {
        resizeEnable: true,
        center: pos, //创建中心点坐标
        zoom: 14, //设置地图缩放级别
        rotation: 0 //设置地图旋转角度
    }); //创建地图实例

    let scale = new AMap.Scale({
            visible: true
        }),
        toolBar = new AMap.ToolBar({
            visible: true
        }),
        overView = new AMap.OverView({
            visible: true
        });
    mapObj.addControl(scale);
    mapObj.addControl(toolBar);
    mapObj.addControl(overView);

    // 搜索
    $('#poi_search').click(function (e) {
        poiRecomDetailInfo();
    });
}

function poiRecomDetailInfo() {
    mapObj.clearMap();

    let text = document.getElementById('poi_text').value;
    let poilist = text.split(";");

    let urlList = poilist.map(function (value, index, array) {
        return {
            url: '/v3/place/detail?key=dc43f8a62c68a793e228515d43281ed1&id=' + value
        }
    });

    // 请求批量接口
    let plist = [];

    for (let i = 0, len = Math.ceil(urlList.length / MAX_LEN); i < len; i++) {
        let p = getDataPromise(urlList.slice(MAX_LEN * i, MAX_LEN * (i + 1)));
        plist.push(p);
    }

    Promise
        .all(plist)
        .then(function (res) {
            console.log('all:', res);

            if (res && res.length > 0) {
                // forEach方法
                // let list = [];

                // res.forEach(function (item, index) {
                //     list = list.concat(item);
                // });

                // 使用reduce方法
                let list = res.reduce(function (pvalue, cvalue) {
                    return pvalue.concat(cvalue);
                });

                renderData(list);
            }
        })
        .catch(function (err) {
            console.log(err);
        });

}

function getDataPromise(urlList) {

    return new Promise(function (resolve, reject) {
        let urlArray = urlList.length > MAX_LEN ? urlList.slice(0, MAX_LEN) : urlList;
        let data = {ops: urlArray};

        // 批量请求接口一次最大支持20个
        $.ajax({
            type: "POST",
            url: 'https://restapi.amap.com/v3/batch?key=dc43f8a62c68a793e228515d43281ed1',
            data: JSON.stringify(data),
            dataType: 'json',
            headers: {
                'Content-Type': 'application/json'
            },
            success: function (res) {
                resolve(res);
            },
            error: function (e) {
                reject(e);
            },
            complete: function (res) {
                resolve(res);
            }
        });
    });
}

function renderData(data) {
    let mkrs = [];
    let resultBox = document.getElementById("recom_result");

    data.forEach(function (item, i) {
        let ret = item.body;

        if (typeof ret == 'object' && ret.pois && ret.pois[0]) {
            let poi = ret.pois[0];
            let xy = poi.location.split(",");
            let x = xy[0];
            let y = xy[1];
            let mkr = addMarkerOnePoint(x, y, i + 1, poi.id, poi.name);
            mkrs.push(mkr);
        }
    });
    mapObj.setFitView(mkrs);

    let html = template('result_list', {
        list: data
    });

    if (html.length < 1) {
        resultBox.innerHTML = '没有检索结果';
    } else {
        resultBox.innerHTML = html;
    }
}

//实例化点标记
function addMarkerOnePoint(lng, lat, i, pid, pname) {
    // let index = i%10;
    let index = i;

    let icon = "http://webapi.amap.com/images/" + index + ".png"
    let marker = new AMap.Marker({
        // icon: icon,
        position: new AMap.LngLat(lng, lat),
        zIndex: i
    });

    // 自定义点标记内容
    let mkrHtml = template('mkr', {
        index: i
    });
    let cont = $(mkrHtml).get(0);

    marker.setContent(cont); //更新点标记内容
    marker.setMap(mapObj);  //在地图上添加点

    return marker;
}

initialize();