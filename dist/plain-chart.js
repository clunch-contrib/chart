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
 * Date:Fri Nov 12 2021 17:45:39 GMT+0800 (中国标准时间)
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

  var image = [{"name":"group","attrs":{"c-for":"(option,order) in options"},"children":[]}];

  function chart (clunch) {
    var chartManager = {
      "new": function _new(option) {}
    };
    return chartManager;
  }

  var bar = ['number', function ($number) {
    return {
      attrs: {},
      region: {
        "default": function _default(render, attr) {}
      },
      link: function link(painter, attr) {}
    };
  }];

  var line = ['number', function ($number) {
    return {
      attrs: {},
      region: {
        "default": function _default(render, attr) {}
      },
      link: function link(painter, attr) {}
    };
  }];

  var pie = ['number', function ($number) {
    return {
      attrs: {},
      region: {
        "default": function _default(render, attr) {}
      },
      link: function link(painter, attr) {}
    };
  }];

  var xRuler = ['number', function ($number) {
    return {
      attrs: {},
      region: {
        "default": function _default(render, attr) {}
      },
      link: function link(painter, attr) {}
    };
  }];

  var yRuler = ['number', function ($number) {
    return {
      attrs: {},
      region: {
        "default": function _default(render, attr) {}
      },
      link: function link(painter, attr) {}
    };
  }];

  var hover = ['number', function ($number) {
    return {
      attrs: {},
      region: {
        "default": function _default(render, attr) {}
      },
      link: function link(painter, attr) {}
    };
  }];

  var serieslist = {
    'plain-chart-bar': bar,
    'plain-chart-line': line,
    'plain-chart-pie': pie,
    'plain-chart-x-ruler': xRuler,
    'plain-chart-y-ruler': yRuler,
    'plain-chart-hover': hover
  };
  var options = {
    render: image,
    data: function data() {
      return {
        options: []
      };
    }
  }; // 为跨端提供

  var PlainChart = function PlainChart(init) {
    return new Promise(function (resolve) {
      init(options, serieslist).then(function (clunch) {
        resolve(chart());
      });
    });
  }; // H5独有


  PlainChart.init = function (Clunch, el) {
    // 注册组件
    Clunch.series(serieslist); // 创建对象并生成图表对象

    options.el = el;
    return chart(new Clunch(options));
  }; // 判断当前环境，如果不是浏览器环境


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = PlainChart;
  } // 浏览器环境下
  else {
    window.PlainChart = PlainChart;
  }

}());
