const util = require('util');
const child_process = require('child_process');
const exec = util.promisify(child_process.exec);

exec(`sass --no-source-map ${__dirname}/../source/css/style.scss ${__dirname}/../source/css/style.min.css --style compressed`)
exec(`sass ${__dirname}/../source/css/style.scss ${__dirname}/../source/css/style.css`)

exec(`tsc`);