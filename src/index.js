import image from '../template.js';
import chart from './chart.js';

let PlainChart = init => {
    return new Promise(resolve => {
        init({
            render: image
        }, {

        }).then(clunch => {
            resolve(chart(clunch));
        });
    });
};

// 判断当前环境，如果不是浏览器环境
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = PlainChart;
}
// 浏览器环境下
else {
    window.PlainChart = PlainChart;
}
