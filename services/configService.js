
const {readdir} = require('fs').promises;
const {readFile} = require("fs").promises;
const envPath = './env/';


 async function getConfig(){
    const pathFile = envPath + 'config.json';
    const configFile = await readFile(pathFile, "utf8");
    const config = JSON.parse(configFile);
    return    config ;

}

module.exports = {getConfig };

