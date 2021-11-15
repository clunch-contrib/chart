export default ['number', 'json', 'string', '$getLoopColors', function ($number, $json, $string, $getLoopColors) {

    return {
        attrs: {
            order: $number(),
            cx: $number(),
            cy: $number(),
            radius: $number(),
            type: $string(),
            values: $json()
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
                painter.config({
                    'fillStyle': colors[index]
                }).fillArc(attr.cx, attr.cy, (attr.type == 'ring' ? 0.5 : 0) * attr.radius, attr.radius, beginDeg, deg);
                beginDeg += deg;
            }

        }
    };

}];
