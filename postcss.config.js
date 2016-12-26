/**
 * Created by fengmiaosen on 2016/12/26.
 */

const autoprefixer = require('autoprefixer');

module.exports = {
    plugins: [
        autoprefixer({
            /* ...options */
            "browserslist": [
                "> 1%",
                "last 2 versions"
            ]
        })
    ]
};