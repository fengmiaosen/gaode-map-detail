/**
 * Created by fengmiaosen on 2016/12/25.
 */
module.exports = {
    plugins: [
        require('autoprefixer')({
            /* ...options */
            "browserslist": [
                "> 1%",
                "last 2 versions"
            ]
        })
    ]
}