

function A(){
    console.log("A");
}

function B(){
    console.log("B");
}

function C(){
    console.log("C")
}

function D(){
    console.log("D")
}


A()

setTimeout(B,3000)

Promise.resolve().then(()=>{C()});

D();