/*!
 * plain-chart - 一个比 Apache ECharts 更简单的开源可视化图表库
 * git+https://github.com/clunch-contrib/chart.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 1.0.2
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Tue Nov 16 2021 14:59:33 GMT+0800 (中国标准时间)
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

  function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
  }

  function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
  }

  function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];

    if (!it) {
      if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
        if (it) o = it;
        var i = 0;

        var F = function () {};

        return {
          s: F,
          n: function () {
            if (i >= o.length) return {
              done: true
            };
            return {
              done: false,
              value: o[i++]
            };
          },
          e: function (e) {
            throw e;
          },
          f: F
        };
      }

      throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }

    var normalCompletion = true,
        didErr = false,
        err;
    return {
      s: function () {
        it = it.call(o);
      },
      n: function () {
        var step = it.next();
        normalCompletion = step.done;
        return step;
      },
      e: function (e) {
        didErr = true;
        err = e;
      },
      f: function () {
        try {
          if (!normalCompletion && it.return != null) it.return();
        } finally {
          if (didErr) throw err;
        }
      }
    };
  }

  var image = [{"name":"group","attrs":{"c-for":"(option,order) in options"},"children":[{"name":"text","attrs":{"c-if":"option.title",":x":"option.grid.x+option.title.x",":y":"option.grid.y+option.title.y",":content":"option.title.value",":fill-color":"option.title.color",":font-size":"option.title[\"font-size\"]",":align":"option.title.align",":baseline":"option.title.baseline"},"children":[]},{"name":"ruler","attrs":{"c-if":"option.xAxis",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":length":"option.grid.width-option.grid.left-option.grid.right","direction":"LR","mark-direction":"right","value-position":"between",":value":"option.xAxis.values"},"children":[]},{"name":"ruler","attrs":{"c-if":"option.yAxis",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":length":"option.grid.height-option.grid.top-option.grid.bottom","direction":"BT","mark-direction":"left","value-position":"mark",":value":"option.yAxis.values"},"children":[]},{"name":"plain-chart-tree","attrs":{"c-if":"option.type==\"tree\"",":order":"order",":cx":"option.grid.x+option.grid.left+(option.grid.width-option.grid.left-option.grid.right)*0.5",":cy":"option.grid.y+option.grid.top+(option.grid.height-option.grid.top-option.grid.bottom)*0.5",":radius":"option.grid.x+(option.grid.width-option.grid.left-option.grid.right)*0.5\n            >\n            option.grid.y+(option.grid.height-option.grid.top-option.grid.bottom)*0.5\n            ?\n            option.grid.y+(option.grid.height-option.grid.top-option.grid.bottom)*0.5\n            :\n            option.grid.x+(option.grid.width-option.grid.left-option.grid.right)*0.5",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.bottom",":width":"option.grid.width-option.grid.left-option.grid.right",":height":"option.grid.height-option.grid.top-option.grid.bottom",":data":"option.treeData",":type":"option.treeType"},"children":[]},{"name":"plain-chart-map","attrs":{"c-if":"option.type==\"map\"",":order":"order",":cx":"option.grid.x+option.grid.left+(option.grid.width-option.grid.left-option.grid.right)*0.5",":cy":"option.grid.y+option.grid.top+(option.grid.height-option.grid.top-option.grid.bottom)*0.5",":width":"option.grid.width-option.grid.left-option.grid.right",":height":"option.grid.height-option.grid.top-option.grid.bottom",":geo-json":"option.geo"},"children":[]},{"name":"plain-chart-bar","attrs":{"c-if":"option.type==\"bar\"",":order":"order",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":width":"option.grid.width-option.grid.left-option.grid.right",":height":"option.grid.height-option.grid.top-option.grid.bottom",":data":"option.series"},"children":[]},{"name":"plain-chart-line","attrs":{"c-if":"option.type==\"line\"",":order":"order",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":width":"option.grid.width-option.grid.left-option.grid.right",":height":"option.grid.height-option.grid.top-option.grid.bottom",":data":"option.series"},"children":[]},{"name":"plain-chart-pie","attrs":{"c-if":"option.type==\"pie\" || option.type==\"ring\"",":order":"order",":cx":"option.grid.x+option.grid.left+(option.grid.width-option.grid.left-option.grid.right)*0.5",":cy":"option.grid.y+option.grid.top+(option.grid.height-option.grid.top-option.grid.bottom)*0.5",":radius":"option.grid.x+(option.grid.width-option.grid.left-option.grid.right)*0.5\n            >\n            option.grid.y+(option.grid.height-option.grid.top-option.grid.bottom)*0.5\n            ?\n            option.grid.y+(option.grid.height-option.grid.top-option.grid.bottom)*0.5\n            :\n            option.grid.x+(option.grid.width-option.grid.left-option.grid.right)*0.5",":values":"option.series.values",":names":"option.series.names",":type":"option.type"},"children":[]}]}];

  /**
   * 判断一个值是不是Object。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Object返回true，否则返回false
   */
  function _isObject (value) {
    var type = _typeof(value);

    return value != null && (type === 'object' || type === 'function');
  }

  var toString = Object.prototype.toString;
  /**
   * 获取一个值的类型字符串[object type]
   *
   * @param {*} value 需要返回类型的值
   * @returns {string} 返回类型字符串
   */

  function getType (value) {
    if (value == null) {
      return value === undefined ? '[object Undefined]' : '[object Null]';
    }

    return toString.call(value);
  }

  /**
   * 判断一个值是不是number。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是number返回true，否则返回false
   */

  function _isNumber (value) {
    return typeof value === 'number' || value !== null && _typeof(value) === 'object' && getType(value) === '[object Number]';
  }

  /**
   * 判断一个值是不是String。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是String返回true，否则返回false
   */

  function _isString (value) {
    var type = _typeof(value);

    return type === 'string' || type === 'object' && value != null && !Array.isArray(value) && getType(value) === '[object String]';
  }

  /**
   * 判断一个值是不是Function。
   *
   * @param {*} value 需要判断类型的值
   * @returns {boolean} 如果是Function返回true，否则返回false
   */

  function _isFunction (value) {
    if (!_isObject(value)) {
      return false;
    }

    var type = getType(value);
    return type === '[object Function]' || type === '[object AsyncFunction]' || type === '[object GeneratorFunction]' || type === '[object Proxy]';
  }

  /*!
   * 💡 - 值类型判断方法
   * https://github.com/hai2007/tool.js/blob/master/type.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */


  var isObject = _isObject; // 基本类型
  var isNumber = _isNumber;
  var isString = _isString;

  var isFunction = _isFunction;
  var isArray = function isArray(input) {
    return Array.isArray(input);
  };

  /**
   * 对齐配置项，
   * 无论用户传递的数据是什么样子的，
   * 经过这里的处理后，
   * 就具有了固定格式和值。
   */

  function format (option, clunch, $ruler) {
    var formatOption = {};
    /**
     * 【1】grid
     */

    var grid = option.grid || {};
    formatOption.grid = {
      x: 'x' in grid ? grid.x : 0,
      y: 'y' in grid ? grid.y : 0,
      width: 'width' in grid ? grid.width : clunch._width,
      height: 'height' in grid ? grid.height : clunch._height,
      left: 'left' in grid ? grid.left : 50,
      right: 'right' in grid ? grid.right : 50,
      top: 'top' in grid ? grid.top : 50,
      bottom: 'bottom' in grid ? grid.bottom : 50
    };
    /**
     * 【2】title
     */

    if (option.title) {
      var title = option.title;
      formatOption.title = {
        x: "x" in title ? title.x : 20,
        y: "y" in title ? title.y : 50,
        value: "value" in title ? title.value : "",
        "font-size": "font-size" in title ? title['font-size'] : 16,
        color: "color" in title ? title.color : '#000',
        align: "align" in title ? title.align : 'left',
        baseline: "baseline" in title ? title.baseline : 'middle'
      };
    } else {
      formatOption.title = false;
    }
    /**
     * 【3】type
    */


    if (['bar', 'line', 'pie', 'ring', 'map', 'tree'].indexOf(option.type) > -1) {
      formatOption.type = option.type;
    } else {
      formatOption.type = 'none';
    }
    /**
     * 【4】data
    */


    var _values = [];
    var _names = []; // 地图

    if (['map'].indexOf(formatOption.type) > -1) {
      formatOption.geo = option.data;
    } // 树图
    else if (['tree'].indexOf(formatOption.type) > -1) {
      formatOption.treeData = option.data;
      var treeConfig = option.tree || {};
      formatOption.treeType = treeConfig.direction || "TB";
    } // 常规数据
    else if (option.data) {
      if (isNumber(option.data[0])) {
        _values = option.data;
      } else {
        var _iterator = _createForOfIteratorHelper(option.data),
            _step;

        try {
          for (_iterator.s(); !(_step = _iterator.n()).done;) {
            var item = _step.value;

            _values.push(item.value);

            _names.push(item.name);
          }
        } catch (err) {
          _iterator.e(err);
        } finally {
          _iterator.f();
        }
      }
    } // 图形数据


    formatOption.series = {
      values: _values,
      names: _names
    };

    if (['bar', 'line'].indexOf(formatOption.type) > -1) {
      /**
        * 【5】xAxis
      */
      var xAxis = option.xAxis || {};
      formatOption.xAxis = {
        values: 'values' in xAxis ? xAxis.values : _names
      };
      /**
       * 【6】yAxis
      */

      var yAxis = option.yAxis || {};
      formatOption.yAxis = {
        values: yAxis.values
      }; // 如果数据刻度尺上无刻度，就需要根据数据计算

      if (!formatOption.yAxis.values) {
        var max = _values[0];
        var min = _values[0];

        var _iterator2 = _createForOfIteratorHelper(_values),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var value = _step2.value;
            if (value > max) max = value;
            if (value < min) min = value;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        formatOption.yAxis.values = $ruler(max, min, 5).ruler;
      } // 补充刻度尺相关的绘图数据


      formatOption.series.min = formatOption.yAxis.values[0];
      formatOption.series.max = formatOption.yAxis.values[formatOption.yAxis.values.length - 1]; // 最后，需要对刻度尺是否显示进行校对

      if (!option.xAxis || !(formatOption.xAxis && formatOption.xAxis.values && formatOption.xAxis.values.length > 0)) formatOption.xAxis = false;
      if (!option.yAxis || !(formatOption.yAxis && formatOption.yAxis.values && formatOption.yAxis.values.length > 0)) formatOption.yAxis = false;
    } else {
      formatOption.xAxis = false;
      formatOption.yAxis = false;
    }

    return formatOption;
  }

  var $RegExp = {
    // 空白字符:http://www.w3.org/TR/css3-selectors/#whitespace
    blankReg: new RegExp("[\\x20\\t\\r\\n\\f]"),
    blanksReg: /^[\x20\t\r\n\f]{0,}$/,
    // 标志符
    identifier: /^[a-zA-Z_$][0-9a-zA-Z_$]{0,}$/
  };

  // 后续我们的任务就是对这个数组进行归约即可(归约交付给别的地方，这里不继续处理)

  /**
   * 例如：
   *  target={
   *      a:{
   *              value:9
   *         },
   *      b:7,
   *      flag:'no'
   *  }
   *  express= "a.value>10 && b< 11 ||flag=='yes'"
   * 变成数组以后应该是：
   *
   * // 比如最后的yes@value表示这是一个最终的值，不需要再计算了
   * ['a','[@value','value@value',']@value','>@value','10@value','&&@value','b','<@value','||@value','flag','==@value','yes@value']
   *
   * 然后，进一步解析得到：
   * [{value:9},'[','value',']','>',10,'&&',7,'<','||','no','==','yes']
   *
   * (当然，我们实际运算的时候，可能和这里不完全一致，这里只是为了方便解释我们的主体思想)
   *
   * 然后我们返回上面的结果即可！
   */
  // 除了上述原因，统一前置处理还有一个好处就是：
  // 可以提前对部分语法错误进行报错，方便定位调试
  // 因为后续的操作越来越复杂，错误越提前越容易定位

  var specialCode1 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '[', ']', '(', ")", '>', '<', '='];
  var specialCode2 = ['+', '-', '*', '/', '%', '&', '|', '!', '?', ':', '>', '<', '=', '<=', '>=', '==', '===', '!=', '!=='];
  function analyseExpress (target, express, scope) {
    // 剔除开头和结尾的空白
    express = express.trim();
    var i = -1,
        // 当前面对的字符
    currentChar = null; // 获取下一个字符

    var next = function next() {
      currentChar = i++ < express.length - 1 ? express[i] : null;
      return currentChar;
    }; // 获取往后n个值


    var nextNValue = function nextNValue(n) {
      return express.substring(i, n + i > express.length ? express.length : n + i);
    };

    next();
    var expressArray = [];

    while (true) {
      if (i >= express.length) break; // 先匹配普通的符号
      // + - * / %
      // && || !
      // ? :
      // [ ] ( )
      // > < >= <= == === != !==
      // 如果是&或者|比较特殊

      if (specialCode1.indexOf(currentChar) > -1) {
        // 对于特殊的符号
        if (['&', '|', '='].indexOf(currentChar) > -1) {
          if (['==='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['&&', '||', '=='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } else {
            throw new Error("Illegal expression : " + express + "\nstep='analyseExpress',index=" + i);
          }
        } else {
          // 拦截部分比较特殊的
          if (['!=='].indexOf(nextNValue(3)) > -1) {
            expressArray.push(nextNValue(3));
            i += 2;
            next();
          } else if (['>=', '<=', '!='].indexOf(nextNValue(2)) > -1) {
            expressArray.push(nextNValue(2));
            i += 1;
            next();
          } // 普通的单一的
          else {
            expressArray.push(currentChar);
            next();
          }
        }
      } // 如果是字符串
      else if (['"', "'"].indexOf(currentChar) > -1) {
        var temp = "",
            beginTag = currentChar;
        next(); // 如果没有遇到结束标签
        // 目前没有考虑 '\'' 这种带转义字符的情况，当然，'\"'这种是支持的
        // 后续如果希望支持，优化这里即可

        while (currentChar != beginTag) {
          if (i >= express.length) {
            // 如果还没有遇到结束标识就结束了，属于字符串未闭合错误
            throw new Error("String unclosed error : " + express + "\nstep='analyseExpress',index=" + i);
          } // 继续拼接


          temp += currentChar;
          next();
        }

        expressArray.push(temp + "@string");
        next();
      } // 如果是数字
      else if (/\d/.test(currentChar)) {
        var dotFlag = 'no'; // no表示还没有匹配到.，如果已经匹配到了，标识为yes，如果匹配到了.，可是后面还没有遇到数组，标识为error

        var temp = currentChar;
        next();

        while (i < express.length) {
          if (/\d/.test(currentChar)) {
            temp += currentChar;
            if (dotFlag == 'error') dotFlag = 'yes';
          } else if ('.' == currentChar && dotFlag == 'no') {
            temp += currentChar;
            dotFlag = 'error';
          } else {
            break;
          }

          next();
        } // 如果小数点后面没有数字，辅助添加一个0


        if (dotFlag == 'error') temp += "0";
        expressArray.push(+temp);
      } // 如果是特殊符号
      // 也就是类似null、undefined等
      else if (['null', 'true'].indexOf(nextNValue(4)) > -1) {
        expressArray.push({
          "null": null,
          "true": true
        }[nextNValue(4)]);
        i += 3;
        next();
      } else if (['false'].indexOf(nextNValue(5)) > -1) {
        expressArray.push({
          'false': false
        }[nextNValue(5)]);
        i += 4;
        next();
      } else if (['undefined'].indexOf(nextNValue(9)) > -1) {
        expressArray.push({
          "undefined": undefined
        }[nextNValue(9)]);
        i += 8;
        next();
      } // 如果是空格
      else if ($RegExp.blankReg.test(currentChar)) {
        do {
          next();
        } while ($RegExp.blankReg.test(currentChar) && i < express.length);
      } else {
        var dot = false; // 对于开头有.进行特殊捕获，因为有.意味着这个值应该可以变成['key']的形式
        // 这是为了和[key]进行区分，例如：
        // .key 等价于 ['key'] 翻译成这里就是 ['[','key',']']
        // 可是[key]就不一样了，翻译成这里以后应该是 ['[','这个值取决当前对象和scope',']']
        // 如果这里不进行特殊处理，后续区分需要额外的标记，浪费资源

        if (currentChar == '.') {
          dot = true;
          next();
        } // 如果是标志符

        /**
         *  命名一个标识符时需要遵守如下的规则：
         *  1.标识符中可以含有字母 、数字 、下划线_ 、$符号
         *  2.标识符不能以数字开头
         */
        // 当然，是不是关键字等我们就不校对了，因为没有太大的实际意义
        // 也就是类似flag等局部变量


        if ($RegExp.identifier.test(currentChar)) {
          var len = 1;

          while (i + len <= express.length && $RegExp.identifier.test(nextNValue(len))) {
            len += 1;
          }

          if (dot) {
            expressArray.push('[');
            expressArray.push(nextNValue(len - 1) + '@string');
            expressArray.push(']');
          } else {
            var tempKey = nextNValue(len - 1); // 如果不是有前置.，那就是需要求解了

            var tempValue = tempKey in scope ? scope[tempKey] : target[tempKey];
            expressArray.push(isString(tempValue) ? tempValue + "@string" : tempValue);
          }

          i += len - 2;
          next();
        } // 都不是，那就是错误
        else {
          throw new Error("Illegal express : " + express + "\nstep='analyseExpress',index=" + i);
        }
      }
    } // 实际情况是，对于-1等特殊数字，可能存在误把1前面的-号作为运算符的错误，这里拦截校对一下


    var length = 0;

    for (var j = 0; j < expressArray.length; j++) {
      if (["+", "-"].indexOf(expressArray[j]) > -1 && ( // 如果前面的也是运算符或开头，这个应该就不应该是运算符了
      j == 0 || specialCode2.indexOf(expressArray[length - 1]) > -1)) {
        expressArray[length++] = +(expressArray[j] + expressArray[j + 1]);
        j += 1;
      } else {
        expressArray[length++] = expressArray[j];
      }
    }

    expressArray.length = length;
    return expressArray;
  }

  var getExpressValue = function getExpressValue(value) {
    // 这里是计算的内部，不需要考虑那么复杂的类型
    if (typeof value == 'string') return value.replace(/@string$/, '');
    return value;
  };

  var setExpressValue = function setExpressValue(value) {
    if (typeof value == 'string') return value + "@string";
    return value;
  };

  function evalValue (expressArray) {
    // 采用按照优先级顺序归约的思想进行
    // 需要明白，这里不会出现括号
    // （小括号或者中括号，当然，也不会有函数，这里只会有最简单的表达式）
    // 这也是我们可以如此归约的前提
    // + - * / %
    // && || !
    // ? :
    // > < >= <= == === != !==
    // !
    // 因为合并以后数组长度一定越来越短，我们直接复用以前的数组即可
    var length = 0,
        i = 0;

    for (; i < expressArray.length; i++) {
      if (expressArray[i] == '!') {
        // 由于是逻辑运算符，如果是字符串，最后的@string是否去掉已经没有意义了
        expressArray[length] = !expressArray[++i];
      } else expressArray[length] = expressArray[i];

      length += 1;
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // * / %

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '*') {
        // 假设不知道一定正确，主要是为了节约效率，是否提供错误提示，再议
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) * getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '/') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) / getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '%') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) % getExpressValue(expressArray[++i]);
      } else {
        // 上面不会导致数组增长
        expressArray[length++] = expressArray[i];
      }
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // + -

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '+') {
        expressArray[length - 1] = setExpressValue(getExpressValue(expressArray[length - 1]) + getExpressValue(expressArray[++i]));
      } else if (expressArray[i] == '-') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) - getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // > < >= <=

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '>') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) > getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) < getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '<=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) <= getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '>=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) >= getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // == === != !==

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) == getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '===') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) === getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!=') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) != getExpressValue(expressArray[++i]);
      } else if (expressArray[i] == '!==') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) !== getExpressValue(expressArray[++i]);
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // && ||

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '&&') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) && getExpressValue(expressArray[1 + i]);
        i += 1;
      } else if (expressArray[i] == '||') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) || getExpressValue(expressArray[1 + i]);
        i += 1;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length; // ?:

    length = 0;

    for (i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '?') {
        expressArray[length - 1] = getExpressValue(expressArray[length - 1]) ? getExpressValue(expressArray[i + 1]) : getExpressValue(expressArray[i + 3]);
        i += 3;
      } else expressArray[length++] = expressArray[i];
    }

    if (length == 1) return getExpressValue(expressArray[0]);
    expressArray.length = length;
    throw new Error('Unrecognized expression : [' + expressArray.toString() + "]");
  }

  function calcValue (target, expressArray, scope) {
    var value = expressArray[0] in scope ? scope[expressArray[0]] : target[expressArray[0]];

    for (var i = 1; i < expressArray.length; i++) {
      try {
        value = value[expressArray[i]];
      } catch (e) {
        console.error({
          target: target,
          scope: scope,
          expressArray: expressArray,
          index: i
        });
        throw e;
      }
    }

    return value;
  }

  var doit1 = function doit1(target, expressArray, scope) {
    // 先消小括号
    // 其实也就是归约小括号
    if (expressArray.indexOf('(') > -1) {
      var newExpressArray = [],
          temp = [],
          // 0表示还没有遇到左边的小括号
      // 1表示遇到了一个，以此类推，遇到一个右边的会减1
      flag = 0;

      for (var i = 0; i < expressArray.length; i++) {
        if (expressArray[i] == '(') {
          if (flag > 0) {
            // 说明这个应该是需要计算的括号里面的括号
            temp.push('(');
          }

          flag += 1;
        } else if (expressArray[i] == ')') {
          if (flag > 1) temp.push(')');
          flag -= 1; // 为0说明主的小括号归约结束了

          if (flag == 0) {
            var _value = evalValue(doit1(target, temp));

            newExpressArray.push(isString(_value) ? _value + '@string' : _value);
            temp = [];
          }
        } else {
          if (flag > 0) temp.push(expressArray[i]);else newExpressArray.push(expressArray[i]);
        }
      }

      expressArray = newExpressArray;
    } // 去掉小括号以后，调用中括号去掉方法


    return doit2(expressArray);
  }; // 中括号嵌套去掉方法


  var doit2 = function doit2(expressArray) {
    var hadMore = true;

    while (hadMore) {
      hadMore = false;
      var newExpressArray = [],
          temp = [],
          // 如果为true表示当前在试探寻找归约最小单元的结束
      flag = false; // 开始寻找里面需要归约的最小单元（也就是可以立刻获取值的）

      for (var i = 0; i < expressArray.length; i++) {
        // 这说明这是一个需要归约的
        // 不过不一定是最小单元
        // 遇到了，先记下了
        if (expressArray[i] == '[' && i != 0 && expressArray[i - 1] != ']') {
          if (flag) {
            // 如果之前已经遇到了，说明之前保存的是错误的，需要同步会主数组
            newExpressArray.push('[');

            for (var j = 0; j < temp.length; j++) {
              newExpressArray.push(temp[j]);
            }
          } else {
            // 如果之前没有遇到，修改标记即可
            flag = true;
          }

          temp = [];
        } // 如果遇到了结束，这说明当前暂存的就是最小归结单元
        // 计算后放回主数组
        else if (expressArray[i] == ']' && flag) {
          hadMore = true; // 计算

          var tempValue = evalValue(temp);
          var _value = newExpressArray[newExpressArray.length - 1][tempValue];
          newExpressArray[newExpressArray.length - 1] = isString(_value) ? _value + "@string" : _value; // 状态恢复

          flag = false;
        } else {
          if (flag) {
            temp.push(expressArray[i]);
          } else {
            newExpressArray.push(expressArray[i]);
          }
        }
      }

      expressArray = newExpressArray;
    }

    return expressArray;
  }; // 路径
  // ["[",express,"]","[",express"]","[",express,"]"]
  // 变成
  // [express][express][express]


  var doit3 = function doit3(expressArray) {
    var newExpressArray = [],
        temp = [];

    for (var i = 0; i < expressArray.length; i++) {
      if (expressArray[i] == '[') {
        temp = [];
      } else if (expressArray[i] == ']') {
        newExpressArray.push(evalValue(temp));
      } else {
        temp.push(expressArray[i]);
      }
    }

    return newExpressArray;
  }; // 获取路径数组(核心是归约的思想)


  function toPath(target, expressArray, scope) {
    var newExpressArray = doit1(target, expressArray); // 其实无法就三类
    // 第一类：[express][express][express]express
    // 第二类：express
    // 第三类：[express][express][express]

    var path; // 第二类

    if (newExpressArray[0] != '[') {
      path = [evalValue(newExpressArray)];
    } // 第三类
    else if (newExpressArray[newExpressArray.length - 1] == ']') {
      path = doit3(newExpressArray);
    } // 第一类
    else {
      var lastIndex = newExpressArray.lastIndexOf(']');
      var tempPath = doit3(newExpressArray.slice(0, lastIndex + 1));
      var tempArray = newExpressArray.slice(lastIndex + 1);
      tempArray.unshift(calcValue(target, tempPath, scope));
      path = [evalValue(tempArray)];
    }

    return path;
  }

  /*!
   * 🔪 - 设置或获取指定对象上字符串表达式对应的值
   * https://github.com/hai2007/algorithm.js/blob/master/value.js
   *
   * author hai2007 < https://hai2007.gitee.io/sweethome >
   *
   * Copyright (c) 2020-present hai2007 走一步，再走一步。
   * Released under the MIT license
   */

  var getValue = function getValue(target, express, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    return calcValue(target, path, scope);
  }; // 设置

  var setValue = function setValue(target, express, value, scope) {
    if (arguments.length < 3) scope = {};
    var expressArray = analyseExpress(target, express, scope);
    var path = toPath(target, expressArray, scope);
    var _target = target;

    for (var i = 0; i < path.length - 1; i++) {
      // 如果需要补充
      if (!(path[i] in _target)) _target[path[i]] = isArray(_target) ? [] : {}; // 拼接下一个

      _target = _target[path[i]];
    }

    _target[path[path.length - 1]] = value;
    return target;
  };

  /**
   * 合并配置项
   */

  function merge (option, newOption) {
    (function doMerge(express, source) {
      for (var key in source) {
        var newExpress = express + "['" + key + "']"; // 如果是对象且不说数组
        // 需要进一步深入

        if (isObject(source[key]) && !isArray(source[key])) {
          if (!getValue(option, newExpress)) {
            setValue(option, newExpress, {});
          }

          doMerge(newExpress, source[key]);
        } // 否则直接合并即可
        else {
          setValue(option, newExpress, source[key]);
        }
      }
    })("", newOption);

    return option;
  }

  function chart (clunch, $ruler) {
    var options = [];

    clunch.doResizeBack = function () {
      for (var order in options) {
        clunch.options[order] = format(options[order], clunch, $ruler);
      }

      clunch.flag += 1;
    };

    var chartManager = {
      // 创建图表
      "new": function _new(option) {
        // 登记好新的图表
        var order = options.length;
        options.push(option);
        setTimeout(function () {
          // 初始化绘图
          clunch.options[order] = format(option, clunch, $ruler);
          clunch.flag += 1;
        }, 300);
        return {
          // 设置配置项
          setOption: function setOption(newOption) {
            // 合并配置
            options[order] = merge(options[order], newOption); // 更新绘图

            clunch.options[order] = format(options[order], clunch, $ruler);
            clunch.flag += 1;
          }
        };
      },
      // 绑定事件
      bind: function bind(eventType, doback) {
        clunch.$bind(eventType, function (target) {
          doback(target);
        });
      }
    };
    return chartManager;
  }

  var bar = ['number', 'json', '$getLoopColors', function ($number, $json, $getLoopColors) {
    return {
      attrs: {
        order: $number(),
        x: $number(),
        y: $number(),
        width: $number(),
        height: $number(),
        data: $json()
      },
      region: {
        "default": function _default(render, attr) {
          var w1 = attr.width / attr.data.values.length;

          for (var i = 0; i < attr.data.values.length; i++) {
            render(i, {
              order: attr.order
            }).fillRect(attr.x + i * w1, attr.y, w1, -1 * attr.height);
          }
        }
      },
      link: function link(painter, attr) {
        painter.config({
          'fillStyle': $getLoopColors(1)[0]
        });
        var w1 = attr.width / attr.data.values.length;
        var h1 = -1 / (attr.data.max - attr.data.min) * attr.height;

        for (var i = 0; i < attr.data.values.length; i++) {
          painter.fillRect(attr.x + w1 * (i + 0.1), attr.y, w1 * 0.8, (attr.data.values[i] - attr.data.min) * h1);
        }
      }
    };
  }];

  var line = ['number', 'json', '$getLoopColors', function ($number, $json, $getLoopColors) {
    return {
      attrs: {
        order: $number(),
        x: $number(),
        y: $number(),
        width: $number(),
        height: $number(),
        data: $json()
      },
      region: {
        "default": function _default(render, attr) {
          var w1 = attr.width / attr.data.values.length;

          for (var i = 0; i < attr.data.values.length; i++) {
            render(i, {
              order: attr.order
            }).fillRect(attr.x + i * w1, attr.y, w1, -1 * attr.height);
          }
        }
      },
      link: function link(painter, attr) {
        painter.config({
          'strokeStyle': $getLoopColors(1)[0]
        });
        var w1 = attr.width / attr.data.values.length;
        var h1 = -1 / (attr.data.max - attr.data.min) * attr.height;
        painter.beginPath();

        for (var i = 0; i < attr.data.values.length; i++) {
          painter.lineTo(attr.x + w1 * (i + 0.5), attr.y + (attr.data.values[i] - attr.data.min) * h1);
        }

        painter.stroke();
      }
    };
  }];

  var pie = ['number', 'json', 'string', '$getLoopColors', '$rotate', function ($number, $json, $string, $getLoopColors, $rotate) {
    return {
      attrs: {
        order: $number(),
        cx: $number(),
        cy: $number(),
        radius: $number(),
        type: $string(),
        values: $json(),
        names: $json()
      },
      region: {
        "default": function _default(render, attr) {
          var allValue = 0;

          var _iterator = _createForOfIteratorHelper(attr.values),
              _step;

          try {
            for (_iterator.s(); !(_step = _iterator.n()).done;) {
              var value = _step.value;
              allValue += value;
            }
          } catch (err) {
            _iterator.e(err);
          } finally {
            _iterator.f();
          }

          var beginDeg = Math.PI * -0.5;

          for (var index in attr.values) {
            var deg = attr.values[index] / allValue * Math.PI * 2;
            render(index, {
              order: attr.order
            }).fillArc(attr.cx, attr.cy, (attr.type == 'ring' ? 0.5 : 0) * attr.radius, attr.radius, beginDeg, deg);
            beginDeg += deg;
          }
        }
      },
      link: function link(painter, attr) {
        var colors = $getLoopColors(attr.values.length);
        var allValue = 0;

        var _iterator2 = _createForOfIteratorHelper(attr.values),
            _step2;

        try {
          for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
            var value = _step2.value;
            allValue += value;
          }
        } catch (err) {
          _iterator2.e(err);
        } finally {
          _iterator2.f();
        }

        var beginDeg = Math.PI * -0.5;

        for (var index in attr.values) {
          var deg = attr.values[index] / allValue * Math.PI * 2; // 绘制弧形

          painter.config({
            'fillStyle': colors[index]
          }).fillArc(attr.cx, attr.cy, (attr.type == 'ring' ? 0.5 : 0) * attr.radius, attr.radius, beginDeg, deg);

          if (attr.names.length > 0) {
            var _painter$beginPath$mo, _painter$beginPath;

            // 绘制提示折线
            var dot1 = $rotate(attr.cx, attr.cy, beginDeg + deg * 0.5, attr.cx + attr.radius, attr.cy);
            var dot2 = $rotate(attr.cx, attr.cy, beginDeg + deg * 0.5, attr.cx + attr.radius + 10, attr.cy);
            var distFlag = dot2[0] > attr.cx ? 1 : -1;

            (_painter$beginPath$mo = (_painter$beginPath = painter.beginPath()).moveTo.apply(_painter$beginPath, _toConsumableArray(dot1))).lineTo.apply(_painter$beginPath$mo, _toConsumableArray(dot2)).lineTo(dot2[0] + distFlag * 10, dot2[1]).stroke();

            painter.config({
              textAlign: distFlag > 0 ? "left" : "right"
            }).fillText(attr.names[index], dot2[0] + distFlag * 15, dot2[1]);
          }

          beginDeg += deg;
        }
      }
    };
  }];

  function calcFeatureCollection(data) {
    var temp = calcFeature(data.features[0]),
        minX = temp.minX,
        maxX = temp.maxX,
        minY = temp.minY,
        maxY = temp.maxY,
        centers = [[(temp.maxX + temp.minX) * 0.5, (temp.maxY + temp.minY) * 0.5]],
        i;

    for (i = 1; i < data.features.length; i++) {
      temp = calcFeature(data.features[i]);
      if (temp.minX < minX) minX = temp.minX;
      if (temp.maxX > maxX) maxX = temp.maxX;
      if (temp.minY < minY) minY = temp.minY;
      if (temp.maxY > maxY) maxY = temp.maxY;
      centers.push([(temp.maxX + temp.minX) * 0.5, (temp.maxY + temp.minY) * 0.5]);
    }

    return {
      minX: minX,
      maxX: maxX,
      minY: minY,
      maxY: maxY,
      centers: centers
    };
  } // 计算边界值
  // 自动区分区域类型


  function calcFeature(data) {
    if (data.geometry.type == 'Polygon') {
      return calcPolygon(data.geometry.coordinates);
    } else {
      return calcMultiPolygon(data.geometry.coordinates);
    }
  } // 获取多区域的统一边界值


  function calcMultiPolygon(data) {
    var minX = data[0][0][0][0],
        maxX = data[0][0][0][0],
        minY = data[0][0][0][1],
        maxY = data[0][0][0][1],
        i,
        temp;

    for (i = 0; i < data.length; i++) {
      temp = calcPolygon(data[i]);
      if (temp.minX < minX) minX = temp.minX;
      if (temp.maxX > maxX) maxX = temp.maxX;
      if (temp.minY < minY) minY = temp.minY;
      if (temp.maxY > maxY) maxY = temp.maxY;
    }

    return {
      minX: minX,
      maxX: maxX,
      minY: minY,
      maxY: maxY
    };
  } // 获取坐标的最值


  function calcPolygon(data) {
    var minX = data[0][0][0],
        maxX = data[0][0][0],
        minY = data[0][0][1],
        maxY = data[0][0][1],
        i,
        j;

    for (i = 0; i < data.length; i++) {
      for (j = 0; j < data[i].length; j++) {
        if (minX > data[i][j][0]) minX = data[i][j][0];else if (maxX < data[i][j][0]) maxX = data[i][j][0];
        if (minY > data[i][j][1]) minY = data[i][j][1];else if (maxY < data[i][j][1]) maxY = data[i][j][1];
      }
    }

    return {
      minX: minX,
      maxX: maxX,
      minY: minY,
      maxY: maxY
    };
  }

  function getCenter (data) {
    var temp;

    if (data.type == 'FeatureCollection') {
      temp = calcFeatureCollection(data);
    } else if (data.type == 'Feature') {
      temp = calcFeature(data);
    } else {
      throw new Error('Type error!' + JSON.stringify({
        "function": "getCenter",
        type: data.type
      }));
    }

    return [(temp.maxX + temp.minX) * 0.5, (temp.maxY + temp.minY) * 0.5, temp.maxX - temp.minX, temp.maxY - temp.minY, temp.centers];
  }

  /**
   * 地图
  */
  // type='Polygon'

  var drawPolygon = function drawPolygon(map, painter, data, cx, cy, type) {
    var i, dxy; // 绘制区域

    painter.beginPath();

    for (i = 0; i < data.length; i++) {
      dxy = map(data[i][0], data[i][1]);
      painter.lineTo(cx + dxy[0], cy + dxy[1]);
    }

    painter.closePath()[type]();
  }; // type='MultiPolygon | Polygon'


  var drawMultiPolygon = function drawMultiPolygon(map, painter, data, cx, cy, type) {
    var i, j;

    if (data.type == 'Polygon') {
      for (i = 0; i < data.coordinates.length; i++) {
        drawPolygon(map, painter, data.coordinates[i], cx, cy, type);
      }
    } else {
      for (i = 0; i < data.coordinates.length; i++) {
        for (j = 0; j < data.coordinates[i].length; j++) {
          drawPolygon(map, painter, data.coordinates[i][j], cx, cy, type);
        }
      }
    }
  };

  var getMapFun = function getMapFun($map, attr) {
    return $map({
      scale: attr.scale,
      center: attr.center,
      type: "eoap"
    });
  };

  var initConfig = function initConfig(attr, that) {
    var center = getCenter(attr['geo-json']);
    if (attr.center == null) attr.center = [center[0], center[1]];
    if (attr.cx == -1) attr.cx = that._width * 0.5;
    if (attr.cy == -1) attr.cy = that._height * 0.5;
    if (attr.width == -1) attr.width = that._width;
    if (attr.height == -1) attr.height = that._height;

    if (attr.scale == null) {
      var xScale = 0.5 * attr.width / center[2];
      var yScale = 0.5 * attr.height / center[3]; // 选择缩放最小的

      attr.scale = xScale < yScale ? xScale : yScale;
    }

    return center[4];
  };

  var map = ["number", "json", "string", "$map", "color", function ($number, $json, $string, $map, $color) {
    return {
      attrs: {
        order: $number(),
        'fill-color': $color('#5470c6'),
        'stroke-color': $color('white'),
        'font-color': $color('white'),
        type: $string('full'),
        cx: $number(),
        cy: $number(),
        width: $number(),
        height: $number(),
        // 地图缩放比例
        scale: $number(null),
        // 地图中心
        center: $json(null),
        // 区域地图数据
        'geo-json': $json()
      },
      region: {
        "default": function _default(render, attr) {
          var map = getMapFun($map, attr),
              i;

          if (attr['geo-json'].type == 'FeatureCollection') {
            for (i = 0; i < attr['geo-json'].features.length; i++) {
              // 绘制
              drawMultiPolygon(map, render(i, {
                geo: attr['geo-json'].features[i],
                order: attr.order
              }).config({
                "lineWidth": 1,
                "lineDash": []
              }), attr['geo-json'].features[i].geometry, attr.cx, attr.cy, attr.type);
            }
          } else if (attr['geo-json'].type == 'Feature') {
            // 绘制
            drawMultiPolygon(map, render().config({
              "lineWidth": 1,
              "lineDash": []
            }), attr['geo-json'].geometry, attr.cx, attr.cy, attr.type);
          }
        }
      },
      link: function link(painter, attr) {
        var centers = initConfig(attr, this);
        var map = getMapFun($map, attr); // 绘制前，设置画笔

        painter.config({
          "fillStyle": attr['fill-color'],
          "strokeStyle": attr['stroke-color'],
          "lineWidth": 1,
          "lineDash": []
        });
        var type = attr.type,
            i,
            textPosition;

        if (attr['geo-json'].type == 'FeatureCollection') {
          for (i = 0; i < attr['geo-json'].features.length; i++) {
            // 如果颜色是函数
            if (isFunction(attr['fill-color'])) painter.config('fillStyle', attr['fill-color'].call(this, attr['geo-json'].features[i].properties, i));
            if (isFunction(attr['stroke-color'])) painter.config('strokeStyle', attr['stroke-color'].call(this, attr['geo-json'].features[i].properties, i)); // 绘制

            drawMultiPolygon(map, painter, attr['geo-json'].features[i].geometry, attr.cx, attr.cy, type);
          }
        } else if (attr['geo-json'].type == 'Feature') {
          // 如果颜色是函数
          if (isFunction(attr['fill-color'])) painter.config('fillStyle', attr['fill-color'].call(this, attr['geo-json'].properties, 0));
          if (isFunction(attr['stroke-color'])) painter.config('strokeStyle', attr['stroke-color'].call(this, attr['geo-json'].properties, 0)); // 绘制

          drawMultiPolygon(map, painter, attr['geo-json'].geometry, attr.cx, attr.cy, type);
        }

        painter.config({
          textAlign: "center",
          textBaseline: "middle",
          "font-size": 10,
          "fillStyle": attr['font-color']
        }); // 绘制文字

        if (attr['geo-json'].type == 'FeatureCollection') {
          for (i = 0; i < attr['geo-json'].features.length; i++) {
            if ('cp' in attr['geo-json'].features[i].properties) {
              textPosition = map(attr['geo-json'].features[i].properties.cp[0], attr['geo-json'].features[i].properties.cp[1]);
            } else {
              textPosition = map(centers[i][0], centers[i][1]);
            }

            painter.fillText(attr['geo-json'].features[i].properties.name, attr.cx + textPosition[0], attr.cy + textPosition[1]);
          }
        } else if (attr['geo-json'].type == 'Feature') {
          painter.fillText(attr['geo-json'].properties.name, attr.cx, attr.cy);
        }
      }
    };
  }];

  /**
   * 树图
   */
  var initConfig$1 = function initConfig(attr) {
    // 数据格式
    var format = attr.format;

    if ('root' in format) ; else format.root = function (initTree) {
      return initTree;
    };

    if ('id' in format) ; else format.id = function (treedata) {
      return treedata.name;
    };

    if ('child' in format) ; else format.child = function (parentTree) {
      return parentTree.children;
    };
  };

  var tree = ["number", "json", "string", "$tree", "$move", function ($number, $json, $string, $tree, $move) {
    return {
      attrs: {
        order: $number(),
        x: $number(),
        y: $number(),
        data: $json(),
        format: $json({}),
        // 默认内置一种格式，对于不符合默认格式的，可以通过配置来认识
        type: $string(),
        width: $number(),
        height: $number(),
        cx: $number(),
        cy: $number(),
        radius: $number(),
        "begin-deg": $number(0),
        deg: $number(Math.PI * 2)
      },
      region: {
        "default": function _default(render, attr) {
          var treeData = $tree({
            // 配置数据结构
            root: attr.format.root,
            id: attr.format.id,
            child: attr.format.child,
            // 配置树图结构
            type: attr.type,
            width: attr.width,
            height: attr.height,
            cx: attr.cx - attr.x,
            cy: attr.cy - attr.y,
            radius: attr.radius,
            "begin-deg": attr['begin-deg'],
            deg: attr.deg
          })(attr.data);

          for (var key in treeData.node) {
            render(key, {
              order: attr.order,
              node: treeData.node[key]
            }).fullCircle(attr.x + treeData.node[key].left, attr.y + treeData.node[key].top, 3);
          }
        }
      },
      link: function link(painter, attr) {
        initConfig$1(attr);

        var key, position, _position, pPosition, pid, deepDis;

        var treeData = $tree({
          // 配置数据结构
          root: attr.format.root,
          id: attr.format.id,
          child: attr.format.child,
          // 配置树图结构
          type: attr.type,
          width: attr.width,
          height: attr.height,
          cx: attr.cx - attr.x,
          cy: attr.cy - attr.y,
          radius: attr.radius,
          "begin-deg": attr['begin-deg'],
          deg: attr.deg
        })(attr.data); // 先绘制连接线

        painter.config({
          strokeStyle: 'gray'
        });

        for (key in treeData.node) {
          if (key == treeData.root) ; else {
            pid = treeData.node[key].pid;
            pPosition = [attr.x + treeData.node[pid].left, attr.y + treeData.node[pid].top];
            position = [attr.x + treeData.node[key].left, attr.y + treeData.node[key].top];
            painter.beginPath().moveTo(pPosition[0], pPosition[1]);

            if (attr.type == 'TB' || attr.type == 'BT') {
              deepDis = (position[1] - pPosition[1]) * 0.3;
              painter.bezierCurveTo(pPosition[0], pPosition[1] + deepDis, position[0], position[1] - deepDis, position[0], position[1]);
            } else if (attr.type == 'LR' || attr.type == 'RL') {
              deepDis = (position[0] - pPosition[0]) * 0.3;
              painter.bezierCurveTo(pPosition[0] + deepDis, pPosition[1], position[0] - deepDis, position[1], position[0], position[1]);
            } // 否则默认直接连接
            else {
              painter.lineTo(position[0], position[1]);
            }

            painter.stroke();
          }
        } // 再绘制文字


        painter.config({
          fillStyle: '#000',
          'font-size': 10,
          textBaseline: 'middle'
        });

        for (key in treeData.node) {
          position = [attr.x + treeData.node[key].left, attr.y + treeData.node[key].top];

          if (key == treeData.root) {
            if (attr.type == 'LR') {
              painter.config('textAlign', 'right').fillText(key, position[0] - 5, position[1]);
            } else {
              painter.config('textAlign', 'left').fillText(key, position[0] + 5, position[1]);
            }
          } else {
            if (attr.type == 'LR') {
              painter.config('textAlign', 'left').fillText(key, position[0] + 5, position[1]);
            } else if (attr.type == 'RL') {
              painter.config('textAlign', 'right').fillText(key, position[0] - 5, position[1]);
            } else if (attr.type == 'TB') {
              painter.config('textAlign', 'left').fillText(key, position[0], position[1] + 5, Math.PI * 0.5);
            } else if (attr.type == 'BT') {
              painter.config('textAlign', 'left').fillText(key, position[0], position[1] - 5, -Math.PI * 0.5);
            } else if (attr.type == 'circle') {
              _position = $move(position[0] - attr.cx, position[1] - 5 - attr.cy, 5, position[0], position[1] - 5);
              painter.fillText(key, _position[0], _position[1], treeData.node[key].deg);
            }
          }
        } // 最后绘制结点


        painter.config({
          fillStyle: 'white',
          strokeStyle: 'red'
        });

        for (key in treeData.node) {
          painter.fullCircle(attr.x + treeData.node[key].left, attr.y + treeData.node[key].top, 3);
        }
      }
    };
  }];

  var serieslist = {
    'plain-chart-bar': bar,
    'plain-chart-line': line,
    'plain-chart-pie': pie,
    'plain-chart-map': map,
    'plain-chart-tree': tree
  };
  var server = {};
  var options = {
    render: image,
    debug: false,
    data: ['$ruler', function ($ruler) {
      server = {
        $ruler: $ruler
      };
      return {
        options: [],
        flag: 0
      };
    }],
    resized: function resized() {
      this.doResizeBack();
    }
  }; // 为跨端提供

  var PlainChart = function PlainChart(init) {
    return new Promise(function (resolve) {
      init(options, serieslist).then(function (clunch) {
        resolve(chart(clunch, server.$ruler));
      });
    });
  }; // H5独有


  PlainChart.init = function (Clunch, el) {
    // 注册组件
    Clunch.series(serieslist); // 创建对象并生成图表对象

    options.el = el;
    return chart(new Clunch(options), server.$ruler);
  }; // 判断当前环境，如果不是浏览器环境


  if ((typeof module === "undefined" ? "undefined" : _typeof(module)) === "object" && _typeof(module.exports) === "object") {
    module.exports = PlainChart;
  } // 浏览器环境下
  else {
    window.PlainChart = PlainChart;
  }

}());
