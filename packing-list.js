const packingList = ["bowls", "plate", "pots", "pans", "eating untensils", "glasses", "cups","cooking utensils"];

console.log("Kitchen stuff to pack");

let i = 0;

//====USING A FOR LOOP===
/*
for (let i = 0; i < packingList.length; i++) {
  console.log(packingList[i])
}
*/

//=====USING A WHILE LOOP TO DO THE SAME THING
while (i < packingList.length) {
  console.log(packingList[i]);
  i++;
}