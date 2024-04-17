let num = prompt('Enter Number')
if (num.startsWith("+254") && num.length == 13) {
console.log("num is valid")
}
else if(num.startsWith("07")){
    valid="+254"+num.slice(1)
    console.log("valid")
}
else if( num.startsWith("7")&& num.length==9){
    valid2="+254"+num
    console.log(valid2)
}
else if (num.startsWith("01")&& num.length==10){
    valid3="+254"+num
    console.log("valid3")
}
else{
    console.log("invalid number")
}





