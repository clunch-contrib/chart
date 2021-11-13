
import format from "./option/format";
import merge from "./option/merge";

export default function (clunch, $ruler) {

    let options = [];

    let chartManager = {

        new(option) {

            // 登记好新的图表
            let order = options.length;
            options.push(option);

            setTimeout(() => {

                // 初始化绘图
                clunch.options.push(format(option, clunch, $ruler));
                clunch.flag += 1;

            }, 300);

            return {

                setOption(newOption) {

                    // 合并配置
                    options[order] = merge(options[order], newOption);

                    // 更新绘图
                    clunch.options[order] = format(options[order], clunch, $ruler);
                    clunch.flag += 1;

                }

            };

        }

    };

    return chartManager;
};
