import * as minimist from 'minimist';
import {writeFile} from 'fs';
import {getResByUrl} from './utils';


async function main(): Promise<void> {
    // 解析命令行参
    const args = minimist(process.argv.slice(2));
    const {_: modeList, version, V, help, H} = args;



    const [key, value, childKey, childValue] = modeList;

    if (key === 'prettier') {
        console.log('安装最新的perttier配置');

        return getResByUrl('https://raw.githubusercontent.com/lijinbia/gcli/main/public/.prettierrc').then((res) => {
            console.log('prettier.config', res);
            writeFile('.prettierrc', res as string, {}, error => {
                if (error) {
                    throw error;
                }
            });
        });
    }

    console.log(
        `请输入相应的命令：
            - 安装prettier：gcli prettier`
    );
}

main();

