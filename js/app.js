// Array 1  n gacha bolgan toq sonlarni massivga yozish

// let n = 5;
// let massArray = [];
// for (let i = 1; i <= n * 2 ; i++){
//   if (i % 2 != 0) {
//     massArray[massArray.length] = i;
//   }
// }
// console.log(massArray);


// Array 2  2 sonni darajalarini chiqarish
// let n = 4;
// let a = 2;
// let massArray = [];
// let b = [];
// for (let i = 1; i <= n; i++) {
//   massArray[i] = i;
//   massArray[i] *= a;
//   b [b.length] = massArray[i];
// }
// console.log(b);


// Array 3 n gacha arifmetic progressiya
// let n = 10;
// let a = 1;
// let b = 2;
// let massArray = [];
// for (let i = 1; i <= n ; i++) {
//   massArray[massArray.length] = a;
//   a += b;
// }
// console.log(massArray);


// Array 4  geometric progressiya
// let n = 10;
// let a = 1;
// let b = 2;
// let massArray = [];
// for (let i = 1; i <= n ; i++) {
//   massArray[massArray.length] = a;
//   a *= b;
// }
// console.log(massArray);

// Array 5 fibonachi sonlar
// let n = 8;
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

// Array 7 teskari chiqarish
// let massArray = [1,2,3,4,5,6,7,8,9,10];
// console.log(massArray.reverse());

// Array 8 toq sonlar va ularni soni
// let n = 10;
// let massArray = [];
// let count = 0;
// for(let i = 1; i <= n; i++){
//   if(i % 2 != 0){
//     massArray[massArray.length] = i;
//     count++;
//   } 
// }

// console.log(massArray, `${count} ta toq son`);

// Array 9 juft sonlar va ularni soni
// let n = 10;
// let massArray = [];
// let count = 0;
// for(let i = n; i >= 1; i--){
//   if(i % 2 == 0){
//     massArray[massArray.length] = i;
//     count++;
//   } 
// }

// console.log(massArray, `${count} ta juft son`);

// Array 10 juft sonlar va toq sonlar

// let newArray = [2, 3, 7, 11, 16, 20, 13, 18];
// let newCount = [];
// let newAdd = [];

// for(let i = 0; i < newArray.length; i++){
//   if(newArray[i] % 2 != 0){
//     newCount[newCount.length] = newArray[i];
//   } else {
//     newAdd[newAdd.length] = newArray[i];
//   }
  
// } 
// console.log(newCount);
// console.log(newAdd);

// Array eng kichigini topish

// let massArray = [2, 3, 6, 8, 9, 11, 45];
// let count = massArray[0];
// for(let i = 0; i < massArray.length; i++){
//   if(massArray[i] < count){
//     count = massArray[i]
//   }
// }

// console.log(count);

// Array eng kichigini juft topish

// let massArray = [2, 3, 6, 8, 9, 11, 45];
// let count = massArray[0];
// for(let i = 0; i < massArray.length; i++){
//   if(i % 2 == 0){
//     if(massArray[i] < count){
//       count = massArray[i];
//     }
//   }
// }

// console.log(count);

// Array 51 a va b massivlar qiymatini almashtirish

// let a = [2, 3, -9, -5, 6];
// let b = [1, -10, 18, 20, 22];
// let c = [];

// c = a;
// a = b;
// b = c;
// console.log(a, b);

// Array 52
// let massArray = [1, -10, 2, 1, 2, 5];

// for(let i = 0; i < massArray.length; i++){
//   if(massArray[i] < 5) {
//     massArray[i] *= 2;
//   }
//   else {
//     massArray[i] /= 2;
//   }
// }
// console.log(massArray);

// Array 53 a va b massivlar ichidagi eng katta elementini chiqarish

// let a = [1, 3, -9, 65, 30];
// let b = [3, 15, 55, 14, -6];
// let c = [];
// for(let i = 0; i < a.length; i++){
//   if(a[i] > b[i]){
//     c[i] = a[i];
//   } else {
//     c[i] = b[i];
//   }
// }
// console.log(c);

// Array 54 juft sonlar

// let n = [1, 2, 5, 6, 8, 10];
// let massArray = [];
// let count = 0;
// for(let i = 0; i <= n.length; i++){
//   if(n[i] % 2 == 0){
//     massArray[massArray.length] = n[i];
//     count++;
//   } 
// }

// console.log(massArray, `${count} ta juft son`);

// Array 55 toq indexdagi sonlar shart operatirisiz

// let massArray = [7, 10, 5, 3, 2, 6, 9];
// let sortArray = [];
// for(let i = 0; i < massArray.length; i++){
//   for(let j = i; j % 2 != 0; j++){
//     sortArray[sortArray.length] = massArray[j];
//   }
// }
// console.log(sortArray);

// Array 56  3 ga karrali indexdagi elementlar

// let massArray = [7, 10, 5, 3, 2, 6, 9];
// let sortArray = [];
// for(let i = 0; i < massArray.length; i += 3){
//   sortArray[sortArray.length] = massArray[i];
//   console.log(i);
// }
// console.log(sortArray);

// Array 57 oldin juft indexdagi keyn toq indexdagi elementlar chiqarish

// let a = [1, 5, 2, 6, 7, 8, 9, 10];
// let b = [];
// for(let i = 0; i < a.length; i++){
//   for(let j = i; j % 2 == 0; j++){
//     b[b.length] = a[j];
//   }
// }
// for(let i = 0; i < a.length; i++){
//   for(let j = i; j % 2 != 0; j++){
//     b[b.length] = a[j];
//   }
// }
// console.log(b);

// Array 58

// let masArray = [5, 4, 9, 2, 8, 11, 3];
// let sortArray = [];
// let count = 0;
// for(let i = 0; i < masArray.length; i++){
//   count += masArray[i];
//   sortArray[sortArray.length] = count;
// }
// console.log(sortArray);

// Array 59

// let masArray = [5, 4, 9, 2, 8, 11, 3];
// let sortArray = [];
// let count = 0;
// for(let i = 0; i < masArray.length; i++){
//   count += masArray[i] / 2;
//   sortArray[sortArray.length] = count;
// }
// console.log(sortArray);

// Array 60

// let masArray = [1, 2, 3, 4, 5, 6, 7, 8];
// let sortArray = [];
// for(let i = 0; i < masArray.length; i++){
//   let count = 0;
//   for(let j = i; j < masArray.length; j++){
//     count += masArray[j];
//   }
//   sortArray[i] = count;
// }
// console.log(sortArray);
