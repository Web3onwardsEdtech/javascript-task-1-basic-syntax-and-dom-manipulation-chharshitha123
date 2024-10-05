let username=prompt("what is your name?");
let studentstatus=true;
let userage=parseInt(prompt("what is your age?"));
function createmsg(name,age,studentstatuss)
    {
    let msg=`hello, you are ${name}`;
    if(studentstatuss){
        message+="im a college student";
    }
    else{
        message+="im not a student";
    }


return msg;


  
}
let finalmsg=createmsg(username,studentstatus,userage);
if(userage<=10){
    for(let i=0;i<userage;i++){
 console.log(finalmsg);
}}
else{
    console.log(finalmsg);
}



function togglevalue(value){
    return !value;
}

let curval=true;

console.log(`the current value is ${curval}`);
let toggledvalue=togglevalue(curval);
console.log(`toggled valus is ${toggledvalue}`);

