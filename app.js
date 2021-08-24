for (let i = 0; i < 5; i++) {
  console.log('hello!');
}

let countdown = 0;
while (countdown < 11) {
  console.log(countdown);
  countdown++;
  if (countdown > 10) {
    console.log("line break");
  }

}



let countup = 10;
while (countup >0) {
  console.log(countup);
  countup--;
}

for (let i = prompt(); i > 0; i--){
  console.log("devcodecamp");
}

let string = "packers";
for (let i = 0; i < string.length; i++) {
  console.log(string[i]);
}


let counter = 5;
let goal = 1;

while(counter > 0) {
  console.log("hello");
  counter --;
}

let password = false;

while ( password === false) {
  if (prompt() === "hello kitty"){
    console.log("User validated");
    break;
  }else{
    console.log("wrong password")
  }
}
