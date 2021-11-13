/*!
 * plain-chart - 一个比 Apache ECharts 更简单的开源可视化图表库
 * git+https://github.com/clunch-contrib/chart.git
 *
 * author 你好2007 < https://hai2007.gitee.io/sweethome >
 *
 * version 1.0.0
 *
 * Copyright (c) 2021 hai2007 走一步，再走一步。
 * Released under the MIT license
 *
 * Date:Sat Nov 13 2021 16:15:30 GMT+0800 (GMT+08:00)
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

  var image = [{"name":"group","attrs":{"c-for":"(option,order) in options"},"children":[{"name":"text","attrs":{"c-if":"option.title",":x":"option.grid.x+option.title.x",":y":"option.grid.y+option.title.y",":content":"option.title.value",":fill-color":"option.title.color",":font-size":"option.title[\"font-size\"]",":align":"option.title.align",":baseline":"option.title.baseline"},"children":[]},{"name":"ruler","attrs":{"c-if":"option.xAxis",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":length":"option.grid.width-option.grid.left-option.grid.right","direction":"LR","mark-direction":"right","value-position":"between",":value":"option.xAxis.values"},"children":[]},{"name":"ruler","attrs":{"c-if":"option.yAxis",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":length":"option.grid.height-option.grid.top-option.grid.bottom","direction":"BT","mark-direction":"left","value-position":"mark",":value":"option.yAxis.values"},"children":[]},{"name":"plain-chart-bar","attrs":{"c-if":"option.type==\"bar\"",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":width":"option.grid.width-option.grid.left-option.grid.right",":height":"option.grid.height-option.grid.top-option.grid.bottom",":data":"option.series"},"children":[]},{"name":"plain-chart-line","attrs":{"c-if":"option.type==\"line\"",":x":"option.grid.x+option.grid.left",":y":"option.grid.y+option.grid.height-option.grid.bottom",":width":"option.grid.width-option.grid.left-option.grid.right",":height":"option.grid.height-option.grid.top-option.grid.bottom",":data":"option.series"},"children":[]},{"name":"plain-chart-pie","attrs":{"c-if":"option.type==\"pie\" || option.type==\"ring\"",":cx":"option.grid.x+option.grid.left+(option.grid.width-option.grid.left-option.grid.right)*0.5",":cy":"option.grid.y+option.grid.top+(option.grid.height-option.grid.top-option.grid.bottom)*0.5",":radius":"option.grid.x+(option.grid.width-option.grid.left-option.grid.right)*0.5\n            >\n            option.grid.y+(option.grid.height-option.grid.top-option.grid.bottom)*0.5\n            ?\n            option.grid.y+(option.grid.height-option.grid.top-option.grid.bottom)*0.5\n            :\n            option.grid.x+(option.grid.width-option.grid.left-option.grid.right)*0.5",":values":"option.series.values",":type":"option.type"},"children":[]}]}];

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


    if (['bar', 'line', 'pie', 'ring'].indexOf(option.type) > -1) {
      formatOption.type = option.type;
    } else {
      formatOption.type = 'none';
    }
    /**
     * 【4】data
    */


    var _values = [];
    var _names = [];

    if (option.data) {
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
      values: _values
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
    var chartManager = {
      "new": function _new(option) {
        // 登记好新的图表
        var order = options.length;
        options.push(option);
        setTimeout(function () {
          // 初始化绘图
          clunch.options.push(format(option, clunch, $ruler));
          clunch.flag += 1;
        }, 300);
        return {
          setOption: function setOption(newOption) {
            // 合并配置
            options[order] = merge(options[order], newOption); // 更新绘图

            clunch.options[order] = format(options[order], clunch, $ruler);
            clunch.flag += 1;
          }
        };
      }
    };
    return chartManager;
  }

  var bar = ['number', 'json', '$getLoopColors', function ($number, $json, $getLoopColors) {
    return {
      attrs: {
        x: $number(),
        y: $number(),
        width: $number(),
        height: $number(),
        data: $json()
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
        x: $number(),
        y: $number(),
        width: $number(),
        height: $number(),
        data: $json()
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

  var pie = ['number', 'json', 'string', '$getLoopColors', function ($number, $json, $string, $getLoopColors) {
    return {
      attrs: {
        cx: $number(),
        cy: $number(),
        radius: $number(),
        type: $string(),
        values: $json()
      },
      link: function link(painter, attr) {
        var colors = $getLoopColors(attr.values.length);
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
          painter.config({
            'fillStyle': colors[index]
          }).fillArc(attr.cx, attr.cy, (attr.type == 'ring' ? 0.5 : 0) * attr.radius, attr.radius, beginDeg, deg);
          beginDeg += deg;
        }
      }
    };
  }];

  var serieslist = {
    'plain-chart-bar': bar,
    'plain-chart-line': line,
    'plain-chart-pie': pie
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
    }]
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
