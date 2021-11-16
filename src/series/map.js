import { isFunction } from '@hai2007/tool/type';
import getCenter from '../tool/getMapCenter';

/**
 * 地图
*/

// type='Polygon'

let drawPolygon = function (map, painter, data, cx, cy, type) {
    let i, dxy;
    // 绘制区域
    painter.beginPath();
    for (i = 0; i < data.length; i++) {
        dxy = map(data[i][0], data[i][1]);
        painter.lineTo(cx + dxy[0], cy + dxy[1]);
    }
    painter.closePath()[type]();
};


// type='MultiPolygon | Polygon'

let drawMultiPolygon = function (map, painter, data, cx, cy, type) {
    let i, j;
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

let getMapFun = function ($map, attr) {

    return $map({
        scale: attr.scale,
        center: attr.center,
        type: "eoap"
    });

};

let initConfig = function (attr, that) {

    let center = getCenter(attr['geo-json']);

    if (attr.center == null) attr.center = [center[0], center[1]];

    if (attr.cx == -1) attr.cx = that._width * 0.5;
    if (attr.cy == -1) attr.cy = that._height * 0.5;
    if (attr.width == -1) attr.width = that._width;
    if (attr.height == -1) attr.height = that._height;

    if (attr.scale == null) {

        let xScale = 0.5 * attr.width / center[2];
        let yScale = 0.5 * attr.height / center[3];

        // 选择缩放最小的
        attr.scale = xScale < yScale ? xScale : yScale;

    }

    return center[4];

}

export default ["number", "json", "string", "$map", "color", function ($number, $json, $string, $map, $color) {
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
            default: function (render, attr) {

                let map = getMapFun($map, attr), i;

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

            },
        },
        link: function (painter, attr) {

            let centers = initConfig(attr, this);

            let map = getMapFun($map, attr);

            // 绘制前，设置画笔
            painter.config({
                "fillStyle": attr['fill-color'],
                "strokeStyle": attr['stroke-color'],
                "lineWidth": 1,
                "lineDash": []
            });

            let type = attr.type, i, textPosition;

            if (attr['geo-json'].type == 'FeatureCollection') {

                for (i = 0; i < attr['geo-json'].features.length; i++) {

                    // 如果颜色是函数
                    if (isFunction(attr['fill-color'])) painter.config('fillStyle', attr['fill-color'].call(this, attr['geo-json'].features[i].properties, i));
                    if (isFunction(attr['stroke-color'])) painter.config('strokeStyle', attr['stroke-color'].call(this, attr['geo-json'].features[i].properties, i));

                    // 绘制
                    drawMultiPolygon(map, painter, attr['geo-json'].features[i].geometry, attr.cx, attr.cy, type);

                }

            } else if (attr['geo-json'].type == 'Feature') {

                // 如果颜色是函数
                if (isFunction(attr['fill-color'])) painter.config('fillStyle', attr['fill-color'].call(this, attr['geo-json'].properties, 0));
                if (isFunction(attr['stroke-color'])) painter.config('strokeStyle', attr['stroke-color'].call(this, attr['geo-json'].properties, 0));

                // 绘制
                drawMultiPolygon(map, painter, attr['geo-json'].geometry, attr.cx, attr.cy, type);

            }

            painter.config({
                textAlign: "center",
                textBaseline: "middle",
                "font-size": 10,
                "fillStyle": attr['font-color']
            });

            // 绘制文字
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

