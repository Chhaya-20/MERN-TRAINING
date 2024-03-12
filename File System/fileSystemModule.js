const fs = require('fs')
var path = require('path');

//Write in file
 function writeFile(path, data) {
    try {
        new Promise(() => {
            fs.writeFile(path, data, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    console.log('File written successfully.');
                }
            });
        });
    } catch (error) {
        console.error( error); 
    }
  
}
//Create Directory
async function createDirectory(path)
{
    try{
        await new Promise(()=>{
            fs.mkdir(path,err=>{
                if (err) {
                    console.log(err);
                } else {
                    console.log('Directory Created...');
                }
            })
       })       
    }
    catch(error)
    {
        console.log(error)
    }
}

//Read files
async function readfile(path) {
    try {
        const data = await new Promise(() => {
            fs.readFile(path, 'utf8', (err, data) => {
                if (err) {
                    console.log(err);
                   
                } else {
                    console.log(data);
                    //return; 
                   
                }
            });
        });
    } catch (error) {
        console.error('Error reading file:', error); 
    }
}

//List of files

async function listfiles(directoryPath) {
    
    fs.readdir(directoryPath, (err, files) => {
        console.log("Content of files in this path are =>  \n")
        files.forEach(file => {
        var x = path.join(directoryPath,file);
        readfile(x)
        });
      });
}






module.exports = {
    listfiles,
    createDirectory,
    //readFileContent,
    readfile,
    writeFile
};