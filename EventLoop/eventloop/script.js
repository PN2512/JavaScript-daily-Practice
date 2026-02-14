

function A(callback){
    console.log("A")
    callback();
}
A(B);


console.log(x)
function B(){
    console.log("B")
}

B();