/**
 * Created by fengmiaosen on 2016/12/25.
 */
//实例化点标记
function addMarkerOnePoint(lng, lat, index) {
    let marker = new AMap.Marker({
        position: new AMap.LngLat(lng, lat),
        zIndex: index
    });

    // 自定义点标记内容
    let html = `<div class="my-mkr"><img src="https://webapi.amap.com/theme/v1.3/markers/n/mark_r.png" alt="${index}" class="mkr-img"><span class="mkr-txt">${index}</span></div>`;

    marker.setContent(html); //更新点标记内容

    return marker;
}

export function addMarker(mapObj, pois) {
    mapObj.clearMap();

    let mkrs = [];
    let mkr = null;

    pois.forEach(function (item, i) {
        let ret = item.body;

        if (typeof ret == 'object' && ret.pois && ret.pois[0]) {
            const poi = ret.pois[0];
            const xy = poi.location.split(",");
            const x = xy[0];
            const y = xy[1];

            mkr = addMarkerOnePoint(x, y, i + 1, poi.id, poi.name);
            mkr.setMap(mapObj);  //在地图上添加点
            mkrs.push(mkr);
        }
    });
    mapObj.setFitView(mkrs);
}