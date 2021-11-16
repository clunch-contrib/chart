import image from '../template.js';
import chart from './chart.js';

// 组件
import bar from './series/bar.js';
import line from './series/line.js';
import pie from './series/pie.js';
import map from './series/map.js';
import tree from './series/tree.js';

let serieslist = {
    'plain-chart-bar': bar,
    'plain-chart-line': line,
    'plain-chart-pie': pie,
    'plain-chart-map': map,
    'plain-chart-tree': tree
};

let server = {};

let options = {
    render: image,
    debug: false,
    data: ['$ruler', function ($ruler) {

        server = {
            $ruler
        };

        return {
            options: [],
            flag: 0
        };
    }],
    resized() {
        this.doResizeBack();
    }
};

// 为跨端提供
let PlainChart = init => {
    return new Promise(resolve => {
        init(options, serieslist).then(clunch => {
            resolve(chart(clunch, server.$ruler));
        });
    });
};

// H5独有
PlainChart.init = function (Clunch, el) {

    // 注册组件
    Clunch.series(serieslist);

    // 创建对象并生成图表对象
    options.el = el;
    return chart(new Clunch(options), server.$ruler);

};

// 判断当前环境，如果不是浏览器环境
if (typeof module === "object" && typeof module.exports === "object") {
    module.exports = PlainChart;
}
// 浏览器环境下
else {
    window.PlainChart = PlainChart;
}
