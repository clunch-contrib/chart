
/**
 * 树图
 */

let initConfig = function (attr) {

    // 数据格式
    let format = attr.format;
    if ('root' in format) { } else format.root = function (initTree) { return initTree; };
    if ('id' in format) { } else format.id = function (treedata) { return treedata.name; };
    if ('child' in format) { } else format.child = function (parentTree) { return parentTree.children; };

};

export default ["number", "json", "string", "$tree", "$move", function ($number, $json, $string, $tree, $move) {
    return {
        attrs: {
            order: $number(),
            x: $number(),
            y: $number(),
            data: $json(),
            format: $json({}),// 默认内置一种格式，对于不符合默认格式的，可以通过配置来认识
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
            default(render, attr) {
                let treeData = $tree({

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
                for (let key in treeData.node) {
                    render(key, {
                        order: attr.order,
                        node: treeData.node[key]
                    }).fullCircle(attr.x + treeData.node[key].left, attr.y + treeData.node[key].top, 3);
                }
            }
        },
        link: function (painter, attr) {

            initConfig(attr);

            let key, position, _position, pPosition, pid, deepDis;
            let treeData = $tree({

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

            // 先绘制连接线
            painter.config({
                strokeStyle: 'gray'
            });
            for (key in treeData.node) {
                if (key == treeData.root) {
                    // 如果是根节点
                } else {

                    pid = treeData.node[key].pid;
                    pPosition = [attr.x + treeData.node[pid].left, attr.y + treeData.node[pid].top];
                    position = [attr.x + treeData.node[key].left, attr.y + treeData.node[key].top];

                    painter.beginPath().moveTo(pPosition[0], pPosition[1]);
                    if (attr.type == 'TB' || attr.type == 'BT') {
                        deepDis = (position[1] - pPosition[1]) * 0.3;
                        painter.bezierCurveTo(
                            pPosition[0], pPosition[1] + deepDis,
                            position[0], position[1] - deepDis,
                            position[0], position[1]
                        );
                    } else if (attr.type == 'LR' || attr.type == 'RL') {
                        deepDis = (position[0] - pPosition[0]) * 0.3;
                        painter.bezierCurveTo(
                            pPosition[0] + deepDis, pPosition[1],
                            position[0] - deepDis, position[1],
                            position[0], position[1]
                        );
                    }

                    // 否则默认直接连接
                    else {
                        painter.lineTo(position[0], position[1]);
                    }

                    painter.stroke();
                }
            }

            // 再绘制文字
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
                    } else {
                        // 否则是不支持的类型
                    }
                }
            }

            // 最后绘制结点
            painter.config({
                fillStyle: 'white',
                strokeStyle: 'red'
            });
            for (key in treeData.node) {
                painter.fullCircle(attr.x + treeData.node[key].left, attr.y + treeData.node[key].top, 3);
            }

        },
    };
},
];
