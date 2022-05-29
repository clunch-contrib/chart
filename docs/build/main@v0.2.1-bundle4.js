
/*************************** [bundle] ****************************/
// Original file:./src/pages/api/start.paper
/*****************************************************************/
window.__etcpack__bundleSrc__['38']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    

    // 导入js
__etcpack__scope_args__=window.__etcpack__getBundle('44');
var script =__etcpack__scope_args__.default;


    // 导入css
__etcpack__scope_args__=window.__etcpack__getBundle('45');


    script.render=function(createElement){

        return createElement('div',{"class":"doc-view","quickpaper":"","data-quickpaper-28fb0d08":""},[createElement('header',{"id":"fixed-top","data-quickpaper-28fb0d08":""},["第一步：获取图表对象"]),createElement('p',{"data-quickpaper-28fb0d08":""},["首先，我们以web端为例，在使用前，你需要首先创建",createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["图表对象"]),"："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["import Clunch from 'clunch';↵↵// myChart就是完成了初始化的图表对象(下同)↵let myChart = PlainChart.init(Clunch, document.getElementById('canvas'));"]),createElement('p',{"data-quickpaper-28fb0d08":""},[createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["图表对象"]),"上有很多方法，使用上面的方法，就可以完成各种绘图等操作。"]),createElement('h2',{"id":"fixed-method","data-quickpaper-28fb0d08":""},["方法"]),createElement('p',{"data-quickpaper-28fb0d08":""},["接下来，我们来说说",createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["图表对象"]),"上一些普通方法（一些特殊的方法开辟了独立的章节进行说明），这些方法可以先不学习，在使用的时候回来查阅即可。"]),createElement('h3',{"id":"fixed-bind","data-quickpaper-28fb0d08":""},["bind"]),createElement('p',{"data-quickpaper-28fb0d08":""},["此方法用于绑定事件，语法如下："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["myChart.bind(eventType, callback);"]),createElement('p',{"data-quickpaper-28fb0d08":""},["其中",createElement('span',{"class":"warn","data-quickpaper-28fb0d08":""},["eventType"]),"表示事件类型，可选的内容有："]),createElement('ul',{"data-quickpaper-28fb0d08":""},[createElement('li',{"data-quickpaper-28fb0d08":""},[createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["click"]),":点击"]),createElement('li',{"data-quickpaper-28fb0d08":""},[createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["dblclick"]),":双击"]),createElement('li',{"data-quickpaper-28fb0d08":""},[createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["mousemove"]),":鼠标移动"]),createElement('li',{"data-quickpaper-28fb0d08":""},[createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["mousedown"]),":鼠标按下"]),createElement('li',{"data-quickpaper-28fb0d08":""},[createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["mouseup"]),":鼠标放开"])]),createElement('p',{"data-quickpaper-28fb0d08":""},["而",createElement('span',{"class":"warn","data-quickpaper-28fb0d08":""},["callback"]),"是事件回调，存在一个形参",createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["target"]),"，里面记录了一些有用的信息。"]),createElement('p',{"data-quickpaper-28fb0d08":""},["举个例子："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["{↵    attr: {order: 0, x: 50, y: 250, width: 300, height: 200, …},↵    data: {order: 0},↵    id: \"0for0-0-4\",↵    left: 218,↵    region: \"default\",↵    series: \"plain-chart-bar\",↵    subRegion: \"3\",↵    top: 178↵}"]),createElement('p',{"data-quickpaper-28fb0d08":""},["如果鼠标交互的位置是空白的，此参数就会如下："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["{↵    attr: {},↵    data: null,↵    left: 244,↵    region: null,↵    series: null,↵    subRegion: null,↵    top: 292↵}"]),createElement('p',{"class":"warn","data-quickpaper-28fb0d08":""},["温馨提示：更多的细节，你可以",createElement('a',{"target":"_blank","class":"link","href":"https://hai2007.gitee.io/clunch/#/api/directive?fixed=c-on","data-quickpaper-28fb0d08":""},["点击此处"]),"进行查看。"]),createElement('h2',{"id":"fixed-platform","data-quickpaper-28fb0d08":""},["兼容更多平台"]),createElement('p',{"data-quickpaper-28fb0d08":""},["由于本库基于的",createElement('a',{"href":"https://hai2007.gitee.io/clunch","target":"_blank","class":"link","data-quickpaper-28fb0d08":""},["框架clunch"]),"是跨平台的，因此，本项目的跨平台和其保持一致。"]),createElement('h3',{"id":"fixed-uni-app","data-quickpaper-28fb0d08":""},["uni-app"]),createElement('p',{"data-quickpaper-28fb0d08":""},["首先，你需要引入uni-app组件，引入以后需要进行注册："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["import uiClunch from 'clunch/platform/uni-app/index.vue';↵↵export default {↵    components:{↵        uiClunch↵    }↵};"]),createElement('p',{"data-quickpaper-28fb0d08":""},["注册完毕就可以在页面中使用了："]),createElement('pre',{"q-code":"html","data-quickpaper-28fb0d08":""},["<ui-clunch ref='clunch' width='100vw' height='100vh-10px'></ui-clunch>"]),createElement('p',{"class":"warn","data-quickpaper-28fb0d08":""},["温馨提示：上面的宽、高属性支持常见的运算，除了数字外，还支持px、vh、vw和rpx等单位。"]),createElement('p',{"data-quickpaper-28fb0d08":""},["最后，进行初始化并获取",createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["图表对象"]),"："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["PlainChart(function (options, serieslist) {↵    return new Promise(resolve => {↵↵        // 第一步：创建对象↵        let clunch = this.$refs.clunch.new(options,serieslist);↵↵        // 第二步：标记已解决↵        resolve(clunch);↵↵    });↵}).then(myChart => {});"]),createElement('h3',{"id":"fixed-weixin","data-quickpaper-28fb0d08":""},["微信小程序"]),createElement('p',{"data-quickpaper-28fb0d08":""},["首先，你需要配置配置初始化命令："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["// package.json↵{↵    \"init-clunch\": \"clunch --weixin ./ui-clunch\"↵}"]),createElement('p',{"data-quickpaper-28fb0d08":""},["然后执行一下："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["npm run init-clunch"]),createElement('p',{"data-quickpaper-28fb0d08":""},["接着，你还需要构建npm（通过在微信小程序开发工具界面的『工具』->『构建 npm』）。"]),createElement('p',{"data-quickpaper-28fb0d08":""},["然后注册组件："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["// page.json↵{↵    \"usingComponents\": {↵        \"ui-clunch\": \"../../ui-clunch/index\"↵    }↵}"]),createElement('p',{"data-quickpaper-28fb0d08":""},["注册完毕就可以在页面中使用了："]),createElement('pre',{"q-code":"html","data-quickpaper-28fb0d08":""},["<ui-clunch id='clunch' width='200px' height='100px'></ui-clunch>"]),createElement('p',{"class":"warn","data-quickpaper-28fb0d08":""},["温馨提示：上面的宽、高属性支持常见的运算，除了数字外，还支持px、vh、vw和rpx等单位。"]),createElement('p',{"data-quickpaper-28fb0d08":""},["同样的，最后，进行初始化并获取",createElement('span',{"class":"important","data-quickpaper-28fb0d08":""},["图表对象"]),"："]),createElement('pre',{"q-code":"","data-quickpaper-28fb0d08":""},["PlainChart(function (options, serieslist) {↵    return new Promise(resolve => {↵↵        // 第一步：创建对象↵        this.selectComponent('#clunch').new(options,serieslist,clunch=>{↵↵            // 第二步：标记已解决↵            resolve(clunch);↵↵        });↵↵    });↵}).then(myChart => {});"]),createElement('h2',{"id":"fixed-issue","data-quickpaper-28fb0d08":""},["反馈"]),createElement('p',{"class":"important subtitle","data-quickpaper-28fb0d08":""},["你也可以和我们一起做贡献！"]),createElement('p',{"data-quickpaper-28fb0d08":""},["我们的最终目的是兼容所有端，如果没有你需要的端，可以去",createElement('a',{"href":"https://github.com/hai2007/clunch/issues","target":"_blank","class":"link","data-quickpaper-28fb0d08":""},["clunch.js"]),"或",createElement('a',{"href":"https://github.com/clunch-contrib/chart/issues","target":"_blank","class":"link","data-quickpaper-28fb0d08":""},["本项目"]),"给我们提issue~"]),createElement('p',{"data-quickpaper-28fb0d08":""},["同时，非常欢迎你加入我们，参与项目的设计、开发和维护，成为长期稳定的贡献者，和我们保持密切的联系。最终，我们会带着初心矢志不渝的坚持维护，并永远保持自由、开源、讨论和进步。"])])

    };

    __etcpack__scope_bundle__.default= script;

  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/start.paper?QuickPaper&type=script&lang=js&hash=28fb0d08
/*****************************************************************/
window.__etcpack__bundleSrc__['44']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    __etcpack__scope_bundle__.default= {};
  
    return __etcpack__scope_bundle__;
}

/*************************** [bundle] ****************************/
// Original file:./src/pages/api/start.paper?QuickPaper&type=style&lang=css&hash=28fb0d08
/*****************************************************************/
window.__etcpack__bundleSrc__['45']=function(){
    var __etcpack__scope_bundle__={};
    var __etcpack__scope_args__;
    var styleElement = document.createElement('style');
var head = document.head || document.getElementsByTagName('head')[0];
styleElement.innerHTML = "\n .subtitle[data-quickpaper-28fb0d08]{\n\nfont-size: 18px;\n\ntext-indent: 0;\n\n}\n";
styleElement.setAttribute('type', 'text/css');head.appendChild(styleElement);
  
    return __etcpack__scope_bundle__;
}
