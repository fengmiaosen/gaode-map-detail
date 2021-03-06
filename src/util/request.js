/**
 * Created by fengmiaosen on 2016/12/25.
 */
import axios from 'axios';
const MAX_LEN = 20;

function getDataPromise(urlList) {

    return new Promise(function (resolve, reject) {
        const urlArray = urlList.length > MAX_LEN ? urlList.slice(0, MAX_LEN) : urlList;
        const data = {ops: urlArray};
        // 批量请求接口一次最大支持20个
        const url = 'https://restapi.amap.com/v3/batch?key=dc43f8a62c68a793e228515d43281ed1';

        axios
            .post(url, data)
            .then(res => {
                resolve(res.data);
            })
            .catch(err => {
                reject(err);
            });
    });
}

export function fetchData(ids, callback) {

    let poilist = ids.split(";");
    let urlList = poilist.map(function (value) {
        return {
            url: `/v3/place/detail?key=dc43f8a62c68a793e228515d43281ed1&id=${value}`
        }
    });

    // 批量请求promise对象数组
    let plist = [];
    let len = Math.ceil(urlList.length / MAX_LEN);

    for (let i = 0; i < len; i++) {
        let p = getDataPromise(urlList.slice(MAX_LEN * i, MAX_LEN * (i + 1)));
        plist.push(p);
    }

    Promise
        .all(plist)
        .then(function (res) {
            // console.log('all:', res);

            if (res && res.length > 0) {
                // 使用reduce方法
                let list = res.reduce(function (pvalue, cvalue) {
                    return pvalue.concat(cvalue);
                });

                callback && callback(list);
            }
        })
        .catch(function (err) {
            console.log(err);
        });
}