const basePath = process.cwd();

process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

if(!(process.argv[2] && process.argv[3] && process.argv[4])) {

  throw new Error("Start Point and End Point are required")
}

const { startCreating, buildSetup } = require(`${basePath}/src/main.js`);

const startPoint = process.argv[2];
const endPoint = process.argv[3];
const projId = process.argv[4];

(() => {
  buildSetup(projId);
  startCreating(Number.parseInt(startPoint), Number.parseInt(endPoint), projId);
})();
