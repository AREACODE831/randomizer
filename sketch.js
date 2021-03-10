//the people you might have been passed and words

let names = [{
  name: "akina",
  //word: "hey"
}, {
  name: "zak",
  //word: "love you"
}, {
  name: "june",
  //word: "sweet"
}, {
  name: "sara",
  //word: "my friend!"
}, {
  name: "cindia",
  //word: "super!"
}, {
  name: "nick",
  //word: "wonderful"
}, {
  name: "sierra",
  //word: "I'm down"
}, {
  name: "greg",
  //word: "you can do it"
}, {
  name: "cris",
  //word: "wanna go get some coffee?"
}, {
  name: "marta",
  //word: "bless you"
}, {
  name: "miguel",
  //word: "chao"
}];

let words = [{
  word: "hey"
}, {
  word: "love you"
}, {
  word: "sweet"
}, {
  word: "my friend!"
}, {
  word: "super!"
}, {
  word: "wonderful"
}, {
  word: "I'm down"
}, {
  word: "you can do it"
}, {
  word: "wanna go get some coffee?"
}, {
  word: "bless you"
}, {
  word: "chao"
}];

let randomIndex;
let randomIndex2;
// let inconsolata;
// function preload() {
//   inconsolata = loadFont('assets/inconsolata.otf');
// }

function setup() {
  createCanvas(400, 400);
  background(238,130,238);

  // console.log("initial array is");
  // console.log(names);

  // names.shift();
  // //pop removes the last thing of the array
  // console.log("array after shift");
  // console.log(names);
  //
  // names.unshift("greg");
  // console.log("array after unshift");
  // console.log(names);
  // //unshift takes the premeter
  // //shift and pop: takes away the first one
  //names.splice(index, number);
  // names.splice(4, 1);
  // console.log("array after splice");
  // console.log(names);
  //splice to remove on that perticuilar section

}

function draw() {

}

function mousePressed() {
  background(random(240,150,238));

//names
  randomIndex = int(random(names.length));
  randomIndex2 = int(random(words.length));
  textStyle(NORMAL);
  textFont('Orbitron');
  textAlign(CENTER, CENTER);
  text(names[randomIndex].name, 180, 150);

//words
  textStyle(ITALIC);
  textFont('Homemade Apple');
  textAlign(CENTER, CENTER);
  text(words[randomIndex2].word, 180, 170);

  names.splice(randomIndex, 1);

}
