
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/new.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['39']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('46');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('47');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-58c8318c":""},[createElement('header',{"id":"fixed-top","data-quickpaper-58c8318c":""},["第二步：创建图表"]),createElement('h2',{"id":"fixed-grammar","data-quickpaper-58c8318c":""},["语法"]),createElement('pre',{"q-code":"","data-quickpaper-58c8318c":""},["let chart = myChart.new(option);"]),createElement('p',{"data-quickpaper-58c8318c":""},["通过",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["图表对象"]),"上面的",createElement('span',{"class":"warn","data-quickpaper-58c8318c":""},["new"]),"方法可以获取一个",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["图表"]),"chart。"]),createElement('p',{"data-quickpaper-58c8318c":""},["上面的option是什么？我们称之为",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["配置项"]),"。每个图表应该长什么样子，就由配置项确定即可，也就是一个JSON，例如："]),createElement('pre',{"q-code":"","data-quickpaper-58c8318c":""},["myChart.new({↵↵})"]),createElement('p',{"data-quickpaper-58c8318c":""},["关于",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["配置项"]),"的具体内容，请查看",createElement('a',{"target":"_blank","class":"link","href":"#/api/options?fixed=top","data-quickpaper-58c8318c":""},["配置项说明"]),"一节。"]),createElement('p',{"data-quickpaper-58c8318c":""},["此外，在这个",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["图表"]),"上有很多方法和属性，下面来说明。"]),createElement('h2',{"id":"fixed-attr","data-quickpaper-58c8318c":""},["属性"]),createElement('h3',{"id":"fixed-width","data-quickpaper-58c8318c":""},["width"]),createElement('p',{"data-quickpaper-58c8318c":""},["当前",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["图表"]),"占据的宽。"]),createElement('h3',{"id":"fixed-height","data-quickpaper-58c8318c":""},["height"]),createElement('p',{"data-quickpaper-58c8318c":""},["当前",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["图表"]),"占据的高。"]),createElement('h2',{"id":"fixed-method","data-quickpaper-58c8318c":""},["方法"]),createElement('h3',{"id":"fixed-setOption","data-quickpaper-58c8318c":""},["setOption"]),createElement('p',{"data-quickpaper-58c8318c":""},["如果后续当前",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["图表"]),"的",createElement('span',{"class":"important","data-quickpaper-58c8318c":""},["配置项"]),"有变动，↵        需要修改，可以通过此方法重新设置。"]),createElement('pre',{"q-code":"","data-quickpaper-58c8318c":""},["chart.setOption(option);"]),createElement('p',{"class":"warn","data-quickpaper-58c8318c":""},["温馨提示：设置的时候，不需要像new的时候给那么全，只需要给出修改的部分即可。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/new.paper?QuickPaper&type=script&lang=js&hash=58c8318c
/*****************************************************************/
window.__etcpack__bundleSrc__['46']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/new.paper?QuickPaper&type=style&lang=css&hash=58c8318c
/*****************************************************************/
window.__etcpack__bundleSrc__['47']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
