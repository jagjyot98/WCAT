// 1. node wcat.js filepath: displays contents of a file in terminal


// console.log(input)

// node wcat.js f1.txt f2.txt f3.txt    gives "[ 'f1.txt', 'f2.txt', 'f3.txt' ]", list of given file names as an array element, here it is normal string only 

// node wcat.js i took input    gives "[ 'i', 'took', 'input' ]"


//+++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
const fs =require("fs")
let input=process.argv.slice(2); //removes frist 2 elements from array

let filesarr=[]     // taking files name to be read
//filespath in array

let optionsarr=[]

for(let i=0;i<input.length;i++){    //entering names in an arry
    let frstchar=input[i].charAt(0)
    // console.log(frstchar)
    if(frstchar=="-")
    {
        optionsarr.push(input[i])
    }
    else{
    filesarr.push(input[i])
    }
}
// console.log("files to be read are "+filesarr)

//check if all the files are present
for(let i=0;i<filesarr.length;i++){
    let doesexist=fs.existsSync(filesarr[i])    //checking wether file actually exist
    if(!doesexist){
        console.log("files dont exist");    // if not then show error message
        // return;          ????????????
    }
}

let content=""
for(let i=0;i<filesarr.length;i++){
    let filescontent=fs.readFileSync(filesarr[i])   //reading each files content
    content+=filescontent+"\n"  // to add "\n" after every file's content's end
}
console.log(content)    // finally displaying the whole string conatining whole contents of all the files

//Numbering fucntion
let contentarr=content.split("\r\n") //for windows "\r\n"
console.log(contentarr)