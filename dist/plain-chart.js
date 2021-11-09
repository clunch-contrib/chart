/*!
 * plain-chart - 一个比 Apache ECharts 更简单的开源可视化图表库
 * git+https://github.com/clunch-contrib/chart.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 0.1.0-alpha.0
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Tue Nov 09 2021 15:50:54 GMT+0800 (中国标准时间)
 */
(function () {
  'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  var image = [];

  function chart (clunch) {
    console.log(clunch);
  }

  var PlainChart = function PlainChart(init) {
    return new Promise(function (resolve) {
      init({
        render: image
      }, {}).then(function (clunch) {
        resolve(chart(clunch));
      });
    });
  }; // 判断当前环境，如果不是浏览器环境


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = PlainChart;
  } // 浏览器环境下
  else {
    window.PlainChart = PlainChart;
  }

}());
