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
        process.exit(); //ends the code
    }
}

let content=""
for(let i=0;i<filesarr.length;i++){
    let filescontent=fs.readFileSync(filesarr[i])   //reading each files content
    content+=filescontent+"\n"  // to add "\n" after every file's content's end
}
// console.log(content)    // finally displaying the whole string conatining whole contents of all the files

//Numbering fucntion
let contentarr=content.split("\r\n") //for windows "\r\n"
// console.table(contentarr)


                // check if -s is present or not

let temparr=[];
let ispresent =optionsarr.includes("-s")    //checks command for "-s"

if(ispresent){                               //if present then true
    for(let i=1;i<contentarr.length;i++){       //checks for the content array conatining data from files
        if(contentarr[i]=="" && contentarr[i-1]==""){       //if current and previous elements both are empty 
            contentarr[i]=null;                               //then put null in current place
        }else if(contentarr[i]=="" && contentarr[i-1]==null){   //ifcurrent is empty and previous is null  
            contentarr[i]=null;                 //tyhen current will be null
        }
    }
    // console.table(contentarr)

    
    //push everything in tempArr except null
    for(let i=0;i<contentarr.length;i++){
        if(contentarr[i]!=null)
            temparr.push(contentarr[i])     //put every element from content arry into temparry, leaving 'null'
    }
    // console.log(temparr);
}

                                            // to execute file till now:   node wcat.js -s f1.txt f2.txt

contentarr=temparr

let indexofn =optionsarr.indexOf("-n");
let indexofb =optionsarr.indexOf("-b");
//if "-n or"-b" not found return -1

let finaloption=""
//if both -n and -b are present
if(indexofn!=-1 && indexofb!=-1){
    if(indexofn<indexofb){
        finaloption="-n";
    }else{
        finaloption="-b";
    }
}else       //either -n is present or -b is present
{
    if(indexofn!=-1)
    finaloption="-n"
    else
    finaloption="-b"
}

//calling of functions by evaluating finaloption
if(finaloption=="-n")
    modifiyContentbyN();
else if(finaloption=="-b")
    modifiyContentbyB();


function modifiyContentbyN(){
    for(let i=0;i<contentarr.length;i++){
        contentarr[i]=(i+1)+") "+contentarr[i]
    }
}

console.log(contentarr)

function modifiyContentbyB(){
    let count=1
    for(let i=0;i<contentarr.length;i++){
        if(content[i]!=""){
            contentarr[i]=count+") "+contentarr[i];
            count++;
        }
        
    }
}


