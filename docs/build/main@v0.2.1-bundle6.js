
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/options.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['40']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('48');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('49');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-0cfa6fb8":""},[createElement('header',{"id":"fixed-top","data-quickpaper-0cfa6fb8":""},["第三步：配置项说明"]),createElement('h2',{"id":"fixed-grid","data-quickpaper-0cfa6fb8":""},["grid"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["表示当前",createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"的位置、大小和内边距等配置。"]),createElement('h3',{"id":"fixed-grid.x","data-quickpaper-0cfa6fb8":""},["x"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"左上角位置的横坐标，默认0。"]),createElement('h3',{"id":"fixed-grid.y","data-quickpaper-0cfa6fb8":""},["y"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"左上角位置的纵坐标，默认0。"]),createElement('h3',{"id":"fixed-grid.width","data-quickpaper-0cfa6fb8":""},["width"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"的宽，默认和画布的宽保持一致。"]),createElement('h3',{"id":"fixed-grid.height","data-quickpaper-0cfa6fb8":""},["height"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"的高，默认和画布的高保持一致。"]),createElement('h3',{"id":"fixed-grid.left","data-quickpaper-0cfa6fb8":""},["left"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"的左边留白，默认50px。"]),createElement('h3',{"id":"fixed-grid.right","data-quickpaper-0cfa6fb8":""},["right"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"的右边留白，默认50px。"]),createElement('h3',{"id":"fixed-grid.top","data-quickpaper-0cfa6fb8":""},["top"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"的上边留白，默认50px。"]),createElement('h3',{"id":"fixed-grid.bottom","data-quickpaper-0cfa6fb8":""},["bottom"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},[createElement('span',{"class":"important","data-quickpaper-0cfa6fb8":""},["图表"]),"的下边留白，默认50px。"]),createElement('h2',{"id":"fixed-title","data-quickpaper-0cfa6fb8":""},["title"]),createElement('h3',{"id":"fixed-title.x","data-quickpaper-0cfa6fb8":""},["x"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["标题横坐标，默认20px。"]),createElement('h3',{"id":"fixed-title.y","data-quickpaper-0cfa6fb8":""},["y"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["标题纵坐标，默认50px。"]),createElement('h3',{"id":"fixed-title.value","data-quickpaper-0cfa6fb8":""},["value"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["标题的文字内容，默认\"\"。"]),createElement('h3',{"id":"fixed-title.font-size","data-quickpaper-0cfa6fb8":""},["font-size"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["标题文字大小，默认16px。"]),createElement('h3',{"id":"fixed-title.color","data-quickpaper-0cfa6fb8":""},["color"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["标题颜色，默认#000。"]),createElement('h3',{"id":"fixed-title.align","data-quickpaper-0cfa6fb8":""},["align"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["文字水平对齐方式，默认\"left\"，还有\"right\"和\"center\"。"]),createElement('h3',{"id":"fixed-title.baseline","data-quickpaper-0cfa6fb8":""},["baseline"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["文字垂直对齐方式，默认\"middle\"，还有\"top\"和\"bottom\"。"]),createElement('h2',{"id":"fixed-type","data-quickpaper-0cfa6fb8":""},["type"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["图表的类型，目前可选有：\"bar\"、\"line\"、\"pie\"、\"ring\"、\"map\"、\"tree\"。"]),createElement('h2',{"id":"fixed-data","data-quickpaper-0cfa6fb8":""},["data"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["表示绘图需要使用得数据，不同的图形有不同的格式要求，下面分类说明。"]),createElement('h3',{"data-quickpaper-0cfa6fb8":""},["类型一"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["如果是常规图形，如\"bar\"、\"line\"、\"pie\"、\"ring\"："]),createElement('pre',{"q-code":"","data-quickpaper-0cfa6fb8":""},["[number,...]"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["或者也可以带有数据备注："]),createElement('pre',{"q-code":"","data-quickpaper-0cfa6fb8":""},["[{↵    value:number,↵    name:string↵},...]"]),createElement('h3',{"data-quickpaper-0cfa6fb8":""},["类型二"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["如果是\"map\"，表示地图地理数据，是一种对各种地理数据结构进行编码的格式，基于Javascript对象表示法(JavaScript Object Notation, 简称JSON)的地理空间信息数据交换格式。"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["由于数据比较特殊，为了方便你的使用，我们维护了常用的一些数据，你可以去",createElement('a',{"href":"https://www.npmjs.com/org/datapool","target":"_blank","class":"link","data-quickpaper-0cfa6fb8":""},["datapool"]),"选择你需要的数据。"]),createElement('p',{"class":"warn","data-quickpaper-0cfa6fb8":""},["如果没有你想要的数据，可以",createElement('a',{"target":"_blank","href":"https://github.com/hai2007/datapool/issues","class":"link","data-quickpaper-0cfa6fb8":""},["去这里"]),"给我们留言~"]),createElement('h3',{"data-quickpaper-0cfa6fb8":""},["类型三"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["如果是\"tree\"，默认支持的格式如下："]),createElement('pre',{"q-code":"","data-quickpaper-0cfa6fb8":""},["[{↵    name:\"\",↵    children:[...]↵},...]"]),createElement('h2',{"id":"fixed-xAxis","data-quickpaper-0cfa6fb8":""},["xAxis"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["水平方向的刻度尺，只有\"bar\"和\"line\"的时候配置有效，用于显示当前条目的分类。"]),createElement('h3',{"id":"fixed-xAxis.values","data-quickpaper-0cfa6fb8":""},["values"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["当前刻度上显示的具体条目明细名称。"]),createElement('h2',{"id":"fixed-yAxis","data-quickpaper-0cfa6fb8":""},["yAxis"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["垂直方向的刻度尺，只有\"bar\"和\"line\"的时候配置有效，用于显示当前数值刻度。"]),createElement('h3',{"id":"fixed-yAxis.values","data-quickpaper-0cfa6fb8":""},["values"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["可选，表示数据刻度上的刻度，默认内部会根据数据自动计算。"]),createElement('h2',{"id":"fixed-tree","data-quickpaper-0cfa6fb8":""},["tree"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["树图\"tree\"独有的配置项。"]),createElement('h3',{"id":"fixed-tree.direction","data-quickpaper-0cfa6fb8":""},["direction"]),createElement('p',{"data-quickpaper-0cfa6fb8":""},["字符串类型，表示树图的方向，默认\"TB\"表示从上往下的树，还有：\"LR\"、\"RL\"、\"BT\"和\"circle\"。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/options.paper?QuickPaper&type=script&lang=js&hash=0cfa6fb8
/*****************************************************************/
window.__etcpack__bundleSrc__['48']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/options.paper?QuickPaper&type=style&lang=css&hash=0cfa6fb8
/*****************************************************************/
window.__etcpack__bundleSrc__['49']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
