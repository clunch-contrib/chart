
/*************************** [bundle] ****************************/
// Original file:./src/pages/examples/index.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['26']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('42');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('43');


    script.render=function(createElement){

        return createElement('div',{"quickpaper":"","data-quickpaper-5d4f0b4e":""},[createElement('div',{"class":"nav","data-quickpaper-5d4f0b4e":""},[createElement('h2',{"@click":"doScroll(\"bar\")","class":"bar","data-quickpaper-5d4f0b4e":""},["柱状图"]),createElement('h2',{"@click":"doScroll(\"line\")","class":"line","data-quickpaper-5d4f0b4e":""},["折线图"]),createElement('h2',{"@click":"doScroll(\"pie\")","class":"pie","data-quickpaper-5d4f0b4e":""},["饼图"]),createElement('h2',{"@click":"doScroll(\"map\")","class":"map","data-quickpaper-5d4f0b4e":""},["地图"]),createElement('h2',{"@click":"doScroll(\"tree\")","class":"tree","data-quickpaper-5d4f0b4e":""},["树图"])]),createElement('div',{"id":"root-view","class":"view","data-quickpaper-5d4f0b4e":""},[createElement('h2',{"id":"fixed-bar","data-quickpaper-5d4f0b4e":""},["柱状图",createElement('span',{"data-quickpaper-5d4f0b4e":""},["bar"])]),createElement('ul',{"data-quickpaper-5d4f0b4e":""},[createElement('li',{"class":"bar_simple","@click":"openExample(\"bar_simple\")","data-quickpaper-5d4f0b4e":""},["简单柱状图"])]),createElement('h2',{"id":"fixed-line","data-quickpaper-5d4f0b4e":""},["折线图",createElement('span',{"data-quickpaper-5d4f0b4e":""},["line"])]),createElement('ul',{"data-quickpaper-5d4f0b4e":""},[createElement('li',{"class":"line_simple","@click":"openExample(\"line_simple\")","data-quickpaper-5d4f0b4e":""},["简单折线图"])]),createElement('h2',{"id":"fixed-pie","data-quickpaper-5d4f0b4e":""},["饼图",createElement('span',{"data-quickpaper-5d4f0b4e":""},["pie"])]),createElement('ul',{"data-quickpaper-5d4f0b4e":""},[createElement('li',{"class":"pie_simple","@click":"openExample(\"pie_simple\")","data-quickpaper-5d4f0b4e":""},["简单饼图"]),createElement('li',{"class":"ring_simple","@click":"openExample(\"ring_simple\")","data-quickpaper-5d4f0b4e":""},["简单环形图"]),createElement('li',{"class":"ring_text","@click":"openExample(\"ring_text\")","data-quickpaper-5d4f0b4e":""},["带提示的环形图"])]),createElement('h2',{"id":"fixed-map","data-quickpaper-5d4f0b4e":""},["地图",createElement('span',{"data-quickpaper-5d4f0b4e":""},["map"])]),createElement('ul',{"data-quickpaper-5d4f0b4e":""},[createElement('li',{"class":"map_china","@click":"openExample(\"map_china\")","data-quickpaper-5d4f0b4e":""},["中国地图"])]),createElement('h2',{"id":"fixed-tree","data-quickpaper-5d4f0b4e":""},["树图",createElement('span',{"data-quickpaper-5d4f0b4e":""},["tree"])]),createElement('ul',{"data-quickpaper-5d4f0b4e":""},[createElement('li',{"class":"tree_circle","@click":"openExample(\"tree_circle\")","data-quickpaper-5d4f0b4e":""},["圆形树图"]),createElement('li',{"class":"tree_BT","@click":"openExample(\"tree_BT\")","data-quickpaper-5d4f0b4e":""},["从下往上树图"]),createElement('li',{"class":"tree_LR","@click":"openExample(\"tree_LR\")","data-quickpaper-5d4f0b4e":""},["从左往右树图"]),createElement('li',{"class":"tree_RL","@click":"openExample(\"tree_RL\")","data-quickpaper-5d4f0b4e":""},["从右往左树图"]),createElement('li',{"class":"tree_TB","@click":"openExample(\"tree_TB\")","data-quickpaper-5d4f0b4e":""},["从上往下树图"])])])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/examples/index.paper?QuickPaper&type=script&lang=js&hash=5d4f0b4e
/*****************************************************************/
window.__etcpack__bundleSrc__['42']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('35');
var fixedScroll =__etcpack__scope_args__.default;

    __etcpack__scope_bundle__.default= {
        mounted() {
            fixedScroll(this.urlFormat(window.location.href).params.fixed || "bar", 100);
        },
        methods: {
            openExample(pagename) {
                this.loadPage("https://hai2007.gitee.io/sweethome/#/editor?file=plain-chart_" + pagename);
            },
            doScroll(fixedName) {
                window.location.href = "#/examples?fixed=" + fixedName;
                fixedScroll(fixedName, 100);
            }
        }
    };
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/Service/fixedScroll.js
/*****************************************************************/
window.__etcpack__bundleSrc__['35']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_args__=window.__etcpack__getBundle('36');
var animation =__etcpack__scope_args__.default;

__etcpack__scope_bundle__.default= function (fixed, overValue) {
  overValue = overValue || 60;
  var element = document.getElementById('root-view');

  if (fixed) {
    // 获取滚动调整结点
    var fixedDom = document.getElementById('fixed-' + fixed);

    if (fixedDom) {
      var offsetTop = fixedDom.offsetTop - overValue;
      var currentScrollTop = element.scrollTop || 0;
      animation(function (deep) {
        element.scrollTop = (offsetTop - currentScrollTop) * deep + currentScrollTop;
      }, 500, function () {
        element.scrollTop = offsetTop;
      });
    }
  } else {
    element.scrollTop = 0;
  }
}
;
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./node_modules/@hai2007/tool/animation.js
/*****************************************************************/
window.__etcpack__bundleSrc__['36']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    //当前正在运动的动画的tick函数堆栈
var $timers = [];
//唯一定时器的定时间隔
var $interval = 13;
//指定了动画时长duration默认值
var $speeds = 400;
//定时器ID
var $timerId = null;

/*!
 * 💡 - 动画轮播
 * https://github.com/hai2007/tool.js/blob/master/animation.js
 *
 * author hai2007 < https://hai2007.gitee.io/sweethome >
 *
 * Copyright (c) 2020-present hai2007 走一步，再走一步。
 * Released under the MIT license
 */

/**
 * @param {function} doback 轮询函数，有一个形参deep，0-1，表示执行进度
 * @param {number} duration 动画时长，可选
 * @param {function} callback 动画结束回调，可选，有一个形参deep，0-1，表示执行进度
 *
 * @returns {function} 返回一个函数，调用该函数，可以提前结束动画
 */
__etcpack__scope_bundle__.default= function (doback, duration, callback) {

    // 如果没有传递时间，使用内置默认值
    if (arguments.length < 2) duration = $speeds;

    var clock = {
        //把tick函数推入堆栈
        "timer": function (tick, duration, callback) {
            if (!tick) {
                throw new Error('Tick is required!');
            }
            var id = new Date().valueOf() + "_" + (Math.random() * 1000).toFixed(0);
            $timers.push({
                "id": id,
                "createTime": new Date(),
                "tick": tick,
                "duration": duration,
                "callback": callback
            });
            clock.start();
            return id;
        },

        //开启唯一的定时器timerId
        "start": function () {
            if (!$timerId) {
                $timerId = setInterval(clock.tick, $interval);
            }
        },

        //被定时器调用，遍历timers堆栈
        "tick": function () {
            var createTime, flag, tick, callback, timer, duration, passTime, needStop,
                timers = $timers;
            $timers = [];
            $timers.length = 0;
            for (flag = 0; flag < timers.length; flag++) {
                //初始化数据
                timer = timers[flag];
                createTime = timer.createTime;
                tick = timer.tick;
                duration = timer.duration;
                callback = timer.callback;
                needStop = false;

                //执行
                passTime = (+new Date() - createTime) / duration;
                if (passTime >= 1) {
                    needStop = true;
                }
                passTime = passTime > 1 ? 1 : passTime;
                tick(passTime);
                if (passTime < 1 && timer.id) {
                    //动画没有结束再添加
                    $timers.push(timer);
                } else if (callback) {
                    callback(passTime);
                }
            }
            if ($timers.length <= 0) {
                clock.stop();
            }
        },

        //停止定时器，重置timerId=null
        "stop": function () {
            if ($timerId) {
                clearInterval($timerId);
                $timerId = null;
            }
        }
    };

    var id = clock.timer(function (deep) {
        //其中deep为0-1，表示改变的程度
        doback(deep);
    }, duration, callback);

    // 返回一个函数
    // 用于在动画结束前结束动画
    return function () {
        var i;
        for (i in $timers) {
            if ($timers[i].id == id) {
                $timers[i].id = undefined;
                return;
            }
        }
    };

};

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/examples/index.paper?QuickPaper&type=style&lang=css&hash=5d4f0b4e
/*****************************************************************/
window.__etcpack__bundleSrc__['43']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n [quickpaper]>div[data-quickpaper-5d4f0b4e]{\n\ndisplay: inline-block;\n\nvertical-align: top;\n\nwhite-space: normal;\n\nheight: calc(100vh - 60px);\n\noverflow: auto;\n\n}\n\n [quickpaper]>div.nav[data-quickpaper-5d4f0b4e]{\n\nwidth: 190px;\n\npadding: 10px 0;\n\n}\n\n [quickpaper]>div.nav>h2[data-quickpaper-5d4f0b4e]{\n\npadding: 10px 0 10px 50px;\n\ndisplay: block;\n\ntext-decoration: none;\n\ncolor: #6e7079;\n\nfont-size: 14px;\n\nline-height: 20px;\n\nbackground-size: 20px auto;\n\nbackground-position: 20px center;\n\nbackground-repeat: no-repeat;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>div.nav>h2[data-quickpaper-5d4f0b4e]:hover{\n\nborder-right: 4px solid #5067a2;\n\n}\n\n [quickpaper]>div.nav>h2.line[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/line.svg');\n\n}\n\n [quickpaper]>div.nav>h2.bar[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/bar.svg');\n\n}\n\n [quickpaper]>div.nav>h2.pie[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/pie.svg');\n\n}\n\n [quickpaper]>div.nav>h2.scatter[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/scatter.svg');\n\n}\n\n [quickpaper]>div.nav>h2.map[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/map.svg');\n\n}\n\n [quickpaper]>div.nav>h2.candlestick[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/candlestick.svg');\n\n}\n\n [quickpaper]>div.nav>h2.radar[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/radar.svg');\n\n}\n\n [quickpaper]>div.nav>h2.tree[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/tree.svg');\n\n}\n\n [quickpaper]>div.nav>h2.sankey[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/sankey.svg');\n\n}\n\n [quickpaper]>div.nav>h2.gauge[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/gauge.svg');\n\n}\n\n [quickpaper]>div.nav>h2.zoom[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/zoom.svg');\n\n}\n\n [quickpaper]>div.nav>h2.drag[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/drag.svg');\n\n}\n\n [quickpaper]>div.view[data-quickpaper-5d4f0b4e]{\n\npadding: 10px 50px;\n\nbackground-color: #f3f4fa;\n\nwidth: calc(100vw - 190px);\n\n}\n\n [quickpaper]>div.view>h2[data-quickpaper-5d4f0b4e]{\n\nmargin-top: 40px;\n\nmargin-bottom: 20px;\n\npadding-bottom: 10px;\n\nborder-bottom: 1px solid #e1e5f2;\n\nfont-weight: normal;\n\ncolor: #464646;\n\nfont-size: 20px;\n\n}\n\n [quickpaper]>div.view>h2>span[data-quickpaper-5d4f0b4e]{\n\nfont-size: 16px;\n\npadding-left: 5px;\n\ncolor: #949cb1;\n\nfont-weight: 200;\n\n}\n\n [quickpaper]>div.view>ul>li[data-quickpaper-5d4f0b4e]{\n\ndisplay: inline-block;\n\nfont-size: 14px;\n\npadding-top: 150px;\n\nwidth: 200px;\n\nmargin: 10px;\n\ntext-align: center;\n\nbackground-size: 90% auto;\n\nbackground-repeat: no-repeat;\n\nbackground-position: center top;\n\ncursor: pointer;\n\n}\n\n [quickpaper]>div.view>ul>li.line_simple[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/line_simple.png');\n\n}\n\n [quickpaper]>div.view>ul>li.bar_simple[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/bar_simple.png');\n\n}\n\n [quickpaper]>div.view>ul>li.pie_simple[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/pie_simple.png');\n\n}\n\n [quickpaper]>div.view>ul>li.ring_simple[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/ring_simple.png');\n\n}\n\n [quickpaper]>div.view>ul>li.ring_text[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/ring_text.png');\n\n}\n\n [quickpaper]>div.view>ul>li.tree_circle[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/tree_circle.png');\n\n}\n\n [quickpaper]>div.view>ul>li.tree_TB[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/tree_TB.png');\n\n}\n\n [quickpaper]>div.view>ul>li.tree_BT[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/tree_BT.png');\n\n}\n\n [quickpaper]>div.view>ul>li.tree_LR[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/tree_LR.png');\n\n}\n\n [quickpaper]>div.view>ul>li.tree_RL[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/tree_RL.png');\n\n}\n\n [quickpaper]>div.view>ul>li.map_china[data-quickpaper-5d4f0b4e]{\n\nbackground-image: url('./image/map_china.png');\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
