export default ['number', 'json', '$getLoopColors', function ($number, $json, $getLoopColors) {

    return {
        attrs: {
            x: $number(),
            y: $number(),
            width: $number(),
            height: $number(),
            data: $json()
        },
        link(painter, attr) {

            painter.config({
                'strokeStyle': $getLoopColors(1)[0]
            });

            let w1 = attr.width / attr.data.values.length;
            let h1 = -1 / (attr.data.max - attr.data.min) * attr.height;

            painter.beginPath();
            for (let i = 0; i < attr.data.values.length; i++) {
                painter.lineTo(
                    attr.x + w1 * (i + 0.5), attr.y + (attr.data.values[i] - attr.data.min) * h1
                );
            }
            painter.stroke();

        }
    };

}];
