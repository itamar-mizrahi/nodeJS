const fs = require('fs');
const path = require('path');
const directory = 'files_to_remove';
let nameOfFiles = [];
function removeFilesAuto() {
    fs.readdir(directory, (err, files) => {
        if (err) throw err;
        if(files){
            nameOfFiles.push(`${files}`);}
        for (const file of files) {
            stats = fs.statSync(path.join(directory, file));
            if (stats.isFile()) {
                fs.unlink(path.join(directory, file), err => {
                    if (err) throw err;
                });
            }
            else {
                fs.rmdir(path.join(directory, file), err => {
                    if (err) throw err;
                });
            }
            fs.writeFile(`removed_files.txt`, nameOfFiles, (err) => {
                if (err) throw err;
            });
        }
    });
}
setInterval(removeFilesAuto, 1500);


