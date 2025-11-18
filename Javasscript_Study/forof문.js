// for...of문 (for...of statement)
/*
for (변수 of 배열) {
  동작부분;
}
*/

let influencer = ['조이', '유타', '코알라', '유관순', '유관순'];

for (let i = 0; i < influencer.length; i++) {
  console.log(influencer[i]);
}

for (let element of influencer) {
  console.log(element);
}

for (let index in influencer) {
  console.log(influencer[index]);
}



