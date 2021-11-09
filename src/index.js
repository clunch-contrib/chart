import image from '../template.js';
import chart from './chart.js';

// 组件
import bar from './series/bar.js';
import line from './series/line.js';
import pie from './series/pie.js';
import xRuler from './series/x-ruler';
import yRuler from './series/y-ruler.js';
import hover from './series/hover';

let PlainChart = init => {
    return new Promise(resolve => {
        init({
            render: image
        }, {
            'plain-chart-bar': bar,
            'plain-chart-line': line,
            'plain-chart-pie': pie,
            'plain-chart-x-ruler': xRuler,
            'plain-chart-y-ruler': yRuler,
            'plain-chart-hover': hover
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
