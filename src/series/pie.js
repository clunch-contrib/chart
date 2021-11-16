export default ['number', 'json', 'string', '$getLoopColors', '$rotate', function ($number, $json, $string, $getLoopColors, $rotate) {

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
            default(render, attr) {
                let allValue = 0;
                for (let value of attr.values) { allValue += value; }

                let beginDeg = Math.PI * -0.5;
                for (let index in attr.values) {
                    let deg = attr.values[index] / allValue * Math.PI * 2;
                    render(index, {
                        order: attr.order
                    }).fillArc(attr.cx, attr.cy, (attr.type == 'ring' ? 0.5 : 0) * attr.radius, attr.radius, beginDeg, deg);
                    beginDeg += deg;
                }
            }
        },
        link(painter, attr) {

            let colors = $getLoopColors(attr.values.length);

            let allValue = 0;
            for (let value of attr.values) {
                allValue += value;
            }

            let beginDeg = Math.PI * -0.5;
            for (let index in attr.values) {
                let deg = attr.values[index] / allValue * Math.PI * 2;

                // 绘制弧形
                painter.config({
                    'fillStyle': colors[index]
                }).fillArc(attr.cx, attr.cy, (attr.type == 'ring' ? 0.5 : 0) * attr.radius, attr.radius, beginDeg, deg);

                if (attr.names.length > 0) {

                    // 绘制提示折线
                    let dot1 = $rotate(attr.cx, attr.cy, beginDeg + deg * 0.5, attr.cx + attr.radius, attr.cy);
                    let dot2 = $rotate(attr.cx, attr.cy, beginDeg + deg * 0.5, attr.cx + attr.radius + 10, attr.cy);
                    let distFlag = dot2[0] > attr.cx ? 1 : -1;

                    painter.beginPath().moveTo(...dot1).lineTo(...dot2).lineTo(dot2[0] + distFlag * 10, dot2[1]).stroke();
                    painter.config({
                        textAlign: distFlag > 0 ? "left" : "right"
                    }).fillText(attr.names[index], dot2[0] + distFlag * 15, dot2[1]);

                }

                beginDeg += deg;
            }

        }
    };

}];
