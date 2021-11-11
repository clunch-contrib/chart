import image from '../template.js';
import chart from './chart.js';

// 组件
import bar from './series/bar.js';
import line from './series/line.js';
import pie from './series/pie.js';
import xRuler from './series/x-ruler';
import yRuler from './series/y-ruler.js';
import hover from './series/hover';

let serieslist = {
    'plain-chart-bar': bar,
    'plain-chart-line': line,
    'plain-chart-pie': pie,
    'plain-chart-x-ruler': xRuler,
    'plain-chart-y-ruler': yRuler,
    'plain-chart-hover': hover
};

let options = {
    render: image
};

// 为跨端提供
let PlainChart = init => {
    return new Promise(resolve => {
        init(options, serieslist).then(clunch => {
            resolve(chart(clunch));
        });
    });
};

// H5独有
PlainChart.init = function (Clunch, el) {

    // 注册组件
    Clunch.series(serieslist);

    // 创建对象并生成图表对象
    options.el = el;
    return chart(new Clunch(options));

};

// 判断当前环境，如果不是浏览器环境
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = PlainChart;
}
// 浏览器环境下
else {
    window.PlainChart = PlainChart;
}
