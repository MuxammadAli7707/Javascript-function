// Problem 153 

// let massArray = [7, 10, 5, 3, 2];
// let sortArray = [];
// let count = 0;
// for(let i = massArray.length; i >= 0; i--){
//   if(massArray[i] % 2 == 0){
//     sortArray[sortArray.length] = i;
//     count++;
//   }
// }

// console.log(sortArray,count);


// Problem 154

// let massArray = [7, 10, 5, 3, 2];
// let sortArray = [];
// let count = 2;
// for(let i = 0; i < massArray.length; i++){
//   for(let j = i; j % count == 0; j++){
//     sortArray[sortArray.length] = massArray[i];
//   }
// }
// console.log(sortArray);

// Problem 155

// let massArray = [1, 2, 3];
// let sortArray = [];
// for(let i = 0; i < massArray.length; i++){
//   for(let j = i; j % 2 == 0; j++){
//     sortArray[sortArray.length] = massArray[i];
//   }
// }
// console.log(sortArray);

// Problem 156

// let massArray = [1, 2, 3, 10, -4, true];
// let sortArray = [];

// for(let i = massArray.length - 1; i >= 0; i--){
//   for(let j = i; j % 2 != 0; j++){
//     sortArray[sortArray.length] = massArray[i]
//   }
// }
// console.log(sortArray);

// Problem 157

// let massArray = [7, 10, 5, 3, 2];
// let sortArray = [];
// let toqArray = [];
// for(let i = 0; i < massArray.length; i++){
//   if(i % 2 == 0){
//     sortArray[sortArray.length] = massArray[i];
//   } else {
//     toqArray[toqArray.length] = massArray[i]
//   }
// }
// for(let i = 0; i < toqArray.length; i++){
//   sortArray[sortArray.length] = toqArray[i]
// }

// console.log(sortArray);

// Problem 159 massivdagi eng oxirgi qiymatdan kichik bo'lgan birinchi element

// let massArray = [7, 10, 3, 5];
// let a = massArray.pop();
// for(let i = 0; i < massArray.length; i++){
//   if(massArray[i] < a){
//     a = massArray[i];
//     break
//   }
// }
// console.log(a);

// Problem 160  

// let massArray = [2, 4, 12];
// let a = massArray.pop();
// let b = massArray[0];
// for(let i = 0; i < massArray.length; i++){
//   if(massArray[i] > b && massArray[i] < a){
//     console.log(i);
//   }
// }


// Problem 164 Arifmetik progressiya

// let masArray = [11, 14, 17, 20, 25];
// let a = masArray[1] - masArray[0];
// let count = 0;
// for(let i = 1; i < masArray.length; i++){
//   if(masArray[i] - a == masArray[i - 1]){
//     count += 0;
//   } else {
//     count += 1;
//     break;
//   }
// } if(masArray.length < 2){
//   console.log(false);
// } else if(count == 0){
//   console.log(a);
// } else {
//   console.log(false);
// }


// Problem 165 Geometrik progressiya

// let masArray = [2, 6, 18];
// let a = Math.floor(masArray[1] / masArray[0]);
// let count = 0;
// for (let i = 1; i < masArray.length; i++) {
//   if (masArray[i] / a != masArray[i - 1]) {
//     count += 1;
//     break
//   }
// }
// if(masArray.length < 2){
//   console.log(false);
// }
// else if (count == 0) {
//   console.log(a);
// } else {
//   console.log(false);
// }

// Problem 166 musbat va manfiy sonlar ketma ketligi

// let massArray = [-2, 4, -8, 16, -32, 10];
// let sortArray = [];
// let manfiyArray = [];
// for(let i = 0; i < massArray.length; i++){
//   if(i > 0){
//     sortArray[sortArray.length] = massArray[i];
//   } else {    
//     manfiyArray[manfiyArray.length] = massArray[i]
//   }
// }
// for(let i = 0; i < manfiyArray.length; i++){
//   sortArray[sortArray.length] = manfiyArray[i]
// }

// console.log(sortArray);

// Problem 167 juft indexli sonlarni qiymati yigindisi

// let massArray = [-2, 4, -8, 16, -32];
// let sortArray = [];
// let count = 0;

// for(let i = 0; i < massArray.length; i++){
//   if(i % 2 == 0){
//     count += massArray[i];
//   }
// }
// console.log(count);

// Problem 168 o'zidan keyn kelgan sonning katta sonning index o'sish tartibi

// let massArray = [15, 1, 54, -5, 56, -52, 65, 5];
// let sortArr = [];
// let count = 0;

// for(let i = 0; i < massArray.length; i++) {
//   if(massArray[i] > massArray[i + 1]){
//     sortArr[sortArr.length] = i;
//     count++;
//   }
// }console.log(sortArr, `c: ${count}`);

// Problem 169 o'zidan keyn kelgan sonning katta sonning index kamayish tatibi

// let massArray = [15, 1, 54, -5, 56, -52, 65, 5];
// let sortArr = [];
// let count = 0;

// for(let i = massArray.length; i >= 0; i--) {
//   if(massArray[i] > massArray[i + 1]){
//     sortArr[sortArr.length] = i;
//     count++;
//   }
// }console.log(sortArr, `c: ${count}`);


// Problem 170 r soniga teng bolgan sonni chiqarish

// let massArray = [1, 2, -10, 3, 5];
// let r = 5;
// for(let i = 0; i < massArray.length; i++){
//   if(massArray[i] == r){
//     console.log(massArray[i]);
//   }
// }

// 171
// let massArray = [1, 2, 3, 3, 4, 5, 5];
// let sortArray = massArray[0];
// for(let i = 0; i < massArray.length; i++){
//   if(massArray[massArray.length] == sortArray[sortArray.length]){
//     massArray.pop();
//   }
// } console.log(massArray);

// Problem 175 juft sonalarni chiqarish

// let massArray = [1, 2, 3, 4, 5];
// let juftArray = [];
// for(let i = 1; i < massArray.length; i++) {
//   if(i % 2 == 0){
//     juftArray[juftArray.length] = i
//   }
// } console.log(juftArray);

// Problem 176 sonlarni qo'shish

// let massArray = [1, 2, 3, 4, 5];
// let allArray = [];
// let count = 0;
// for(let i = 0; i < massArray.length; i++){
//   count += massArray[i];
//   allArray[allArray.length] = count;
// } console.log(allArray);

// Problem 179 Fibonachi sonlar

// let n = 6;
// let a = 0;
// let b = 1;
// let c = 0;
// let newArray = [];

// for(let i = 1; i <= n; i++){
//   c = a + b;
//   a = b;
//   b = c;
//   newArray[newArray.length] = c;
// }

// console.log(newArray);

// Problem 180 min va max sonlar

// let massArray = [2, 3, 6, 8, 9, 11, 45];
// let min = massArray[0];
// let max = massArray[0];
// for(let i = 0; i < massArray.length; i++){
//   if(massArray[i] < min){
//     min = massArray[i]
//   } else {
//     max = massArray[i]
//   }
// } console.log(`Min: ${min}`, `Max: ${max}`);

// Problem 182

// let massArray = [-2, 4, -8, 16, -32];
// let n = 10;
// for(let i = 0; i < massArray.length; i++){
//   if( massArray[i] == n){
//     console.log(`index: ${i}`);
//   }
// }