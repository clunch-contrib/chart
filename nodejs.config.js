const fs = require('fs');
const path = require('path');

module.exports = {

    // 当前配置文件的相对路径上下文
    path: __dirname,

    // package.json路径
    pkg: '.',

    // 定义任务
    task: {
        compileTemplate(nodejs, pkg, rootPath) {

            // 读取.clunch文件
            let template = fs.readFileSync(nodejs.fullPath('./src/image.clunch', rootPath), 'utf-8');

            // 解析成json
            let render = require('clunch/loader.js')(template);

            // 写入指定文件
            fs.writeFileSync(nodejs.fullPath('./template.js', rootPath), render.trim(), 'utf-8');

        },
        default(nodejs, pkg, rootPath) {

            [
                'plain-chart.js',
                'plain-chart.min.js'
            ].forEach(item => {

                let filePath = path.join(rootPath, "./dist/" + item);

                let banner =
                    `/*!
 * plain-chart - ${pkg.description}
 * ${pkg.repository.url}
 *
 * author ${pkg.author} < https://hai2007.github.io/SweetHome >
 *
 * version ${pkg.version}
 *
 * Copyright (c) 2021-2022 hai2007 走一步，再走一步。
 * Released under the ${pkg.license} license
 *
 * Date:${new Date()}
 */`;

                fs.writeFileSync(filePath, banner + "\n" + fs.readFileSync(filePath));

            })

        }
    }

};
