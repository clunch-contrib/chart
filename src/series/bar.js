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
                'fillStyle': $getLoopColors(1)[0]
            });

            let w1 = attr.width / attr.data.values.length;
            let h1 = -1 / (attr.data.max - attr.data.min) * attr.height;

            for (let i = 0; i < attr.data.values.length; i++) {
                painter.fillRect(
                    attr.x + w1 * (i + 0.1), attr.y,
                    w1 * 0.8, (attr.data.values[i] - attr.data.min) * h1
                );
            }

        }
    };

}];
