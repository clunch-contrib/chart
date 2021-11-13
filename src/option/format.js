import { isNumber } from '@hai2007/tool/type';

/**
 * 对齐配置项，
 * 无论用户传递的数据是什么样子的，
 * 经过这里的处理后，
 * 就具有了固定格式和值。
 */

export default function (option, clunch, $ruler) {

    let formatOption = {};

    /**
     * 【1】grid
     */
    let grid = option.grid || {};
    formatOption.grid = {
        x: 'x' in grid ? grid.x : 0,
        y: 'y' in grid ? grid.y : 0,
        width: 'width' in grid ? grid.width : clunch._width,
        height: 'height' in grid ? grid.height : clunch._height,
        left: 'left' in grid ? grid.left : 50,
        right: 'right' in grid ? grid.right : 50,
        top: 'top' in grid ? grid.top : 50,
        bottom: 'bottom' in grid ? grid.bottom : 50,
    };

    /**
     * 【2】title
     */
    if (option.title) {
        let title = option.title;
        formatOption.title = {
            x: "x" in title ? title.x : 20,
            y: "y" in title ? title.y : 50,
            value: "value" in title ? title.value : "",
            "font-size": "font-size" in title ? title['font-size'] : 16,
            color: "color" in title ? title.color : '#000',
            align: "align" in title ? title.align : 'left',
            baseline: "baseline" in title ? title.baseline : 'middle',
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
    let _values = [];
    let _names = [];
    if (option.data) {
        if (isNumber(option.data[0])) {
            _values = option.data;
        } else {
            for (let item of option.data) {
                _values.push(item.value);
                _names.push(item.name);
            }
        }
    }

    // 图形数据
    formatOption.series = {
        values: _values
    };

    if (['bar', 'line'].indexOf(formatOption.type) > -1) {

        /**
          * 【5】xAxis
        */
        let xAxis = option.xAxis || {};
        formatOption.xAxis = {
            values: 'values' in xAxis ? xAxis.values : _names
        };

        /**
         * 【6】yAxis
        */
        let yAxis = option.yAxis || {};
        formatOption.yAxis = {
            values: yAxis.values
        };

        // 如果数据刻度尺上无刻度，就需要根据数据计算
        if (!formatOption.yAxis.values) {

            let max = _values[0];
            let min = _values[0];
            for (let value of _values) {
                if (value > max) max = value;
                if (value < min) min = value;
            }

            formatOption.yAxis.values = $ruler(max, min, 5).ruler;

        }

        // 补充刻度尺相关的绘图数据
        formatOption.series.min = formatOption.yAxis.values[0];
        formatOption.series.max = formatOption.yAxis.values[formatOption.yAxis.values.length - 1];

        // 最后，需要对刻度尺是否显示进行校对
        if (!option.xAxis || !(formatOption.xAxis && formatOption.xAxis.values && formatOption.xAxis.values.length > 0)) formatOption.xAxis = false;
        if (!option.yAxis || !(formatOption.yAxis && formatOption.yAxis.values && formatOption.yAxis.values.length > 0)) formatOption.yAxis = false;

    } else {
        formatOption.xAxis = false;
        formatOption.yAxis = false;
    }

    return formatOption;
};
