import bs from 'taskr-build/fw/servor';
bs.start({
    root: 'dist',
    port: 9000
});

var env = 'development';
var fw = 'angular';
var out = 'dist';

export default async function (task) {
    await task.parallel(['ts', 'html'])
    await task.watch('src/ts/**/*.*', 'ts')
    await task.watch('_site/**/*.js', 'changes')
}

export async function html(task) {
    await task.source('src/html/index.html').target(`${out}`)
}

export async function ts(task) {
    await task.source('src/ts/main.ts').build({
        fw: `${fw}`,
        env: `${env}`
    }).target(`${out}`)
}
