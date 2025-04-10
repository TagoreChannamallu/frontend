let n=prompt("enter any number:")






function isprime(){
    for(let i=2; i<n; i++){
        if(n % i == 0)return false;
    }
    return true;
}
 function showPrimes(n){
    for(let i=2; i<n; i++){
        if(isprime(i)) console.log(i);
    }
}
showPrimes(20)

function sayHi() {
    alert('Hello');
  }
  
  setTimeout(sayHi, 10000);  
  

function outerfunction(){
    let counter = 0;
    function innerfunction(){
        counter++;
        return counter;
    }
    return innerfunction;
}

const incrementCounter = outerfunction();
console.log(incrementCounter());

console.log(incrementCounter());

console.log(incrementCounter());




let car={
    sound:"loud",
};

let bmw={
    speed:Highlight,
};

bmw.__proto__=car;

console.log(bmw.speed);
console.log(bmw.Highlight);


let bus={
    sound:true,
    moving(){
        console.log("bus moves");
    }
};

let nuego={
    speed:true,
    __proto__:bus
};

let movefast={
    __proto__:bus
}

movefast.moving();



var  father = { firstName : "hari", lastName : "Babu"}

var mother = { firstName: "sri" , lastName : "devi"}

function invite(greeting1, greeting2){
    console.log(greeting1 + "" + this.firstName + "" + this.lastName + "," + greeting2);

} 

invite.call(father, "hello" , "how are you")

invite.call(mother, "hello" , "how are you")








