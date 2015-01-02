var fs = require('fs'),
oldFilename,
newFilename,
isSymLink;

oldFilename = "./processId.txt";
newFilename = "./processIdOld.txt";

fs.chmodSync(oldFilename, 777);
fs.renameSync(oldFilename, newFilename);

isSymLink = fs.lstatSync(newFilename).isSymbolicLink();
