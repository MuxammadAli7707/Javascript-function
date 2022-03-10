// Problem 153  juft sonlarni index o'rni

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

// Problem 158 

// let masArray = [7, 10, 3, 2];
// let arr = "";
// for(let i = 0; i < masArray.length / 2; i++){
//   arr += masArray[i] + " " + masArray[masArray.length - 1 - i] + " ";
// }
// console.log(arr);

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

// Problem 161 L VA K orasidagi sonlarni yig'indisi

// let masArray = [2, 4, 12];
// let = K = 0;
// let L = 2;
// let a = 0;
// for(let i = K + 1; i < L; i++){
//   a += masArray[i];
// }
// console.log(a);

// Problem 162 L VA K orasidagi sonlarni yig'indisi va o'rta arifmetik soni
// let masArray = [5, 10, 3, 7, 10, 12, 4];
// let = K = 0;
// let L = 4;
// let a = 0;
// let count = 0;
// for(let i = K + 1; i < L; i++){
//   a += masArray[i];
//   count++;
// }
// console.log(a / count);

// Problem 163 L VA K orasidagi sonlarni qolgan sonlar yig'indisi
// let masArray = [5, 10, 3, 7, 10, 12, 4];
// let = K = 0;
// let L = 4;
// let count = 0;

// for(let i = K + 1; i < L; i++){
//   masArray[i] = 0;
// }
// for(let j = 0; j < masArray.length; j++){
//   count += masArray[j];
// } console.log(count);


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
// let n = true;
// if(massArray[0] < 0){
//   for(let i = 0; i < massArray.length; i++){
//     if(i % 2 == 0 &&  massArray[i]> 0){
//       n = i;
//       break;
//     } else if(i % 2 == 1 && massArray[i] < 0) {
//       n = i;
//       break;
//     }
//   }
// } else {
//   for(let i = 0; i < massArray.length; i++){
//     if(i % 2 == 0 && massArray[i] < 0){
//       n = i;
//       break;
//     } else if(i % 2 == 1 && massArray[i] > 0) {
//       n = i;
//       break;
//     }
//   }
// }

// console.log(n);

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

// let massArray = [1, -3, 12, -1, 3, -4];
// let sortArr = [];
// let count = 0;

// for(let i = massArray.length - 1; i >= 0; i--) {
//   if(massArray[i] < massArray[i - 1]){
//     sortArr[sortArr.length] = massArray[i - 1];
//     count++;
//   }
// }
// console.log(sortArr, `c: ${count}`);


// Problem 170 r soniga teng bolgan sonni chiqarish

// let massArray = [1, 2, -10, 3, 5];
// let r = 5;
// let count = massArray[0];
// let res = Infinity;
// for(let i = 0; i < massArray.length; i++){
//   const t = Math.abs(massArray[i] - r);
//   if(res > t){
//     res = t;
//     count = massArray[i];
//   }
// } console.log(count);

// Problem 171 takrorlangan sonni bittasini chiqarish

// let massArray = [2, 5, 5, 6, 4, 4];
// let sortArray = []; 
// for (let i = 0; i < massArray.length; i++) {
//   let count = 0;
//   for (let j = 0; j < sortArray.length; j++) {
//     if (sortArray[j] == massArray[i]) {
//       count++;
//       break
//     }
//   }
//   if (count == 0) {
//     sortArray.push(massArray[i])4
//   }
// }
// console.log(sortArray);

// Problem 172 massivlarni joyini almashtirish

// let a = [5, null];
// let b = [2, null];
// let c = [];
// c = a;
// a = b;
// b = c; 
// console.log(a);
// console.log(b);

// Problem 173

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


// Problem 174

// let massArray = [1, 5];
// let sortArray = [-3, 3];
// let arr = [];

// for(let i = 0; i < massArray.length; i++) {
//   if(massArray[i] > sortArray[i]){
//     arr[arr.length] = massArray[i];
//   }
//   else {
//     arr[arr.length] = sortArray[i];
//   }
// }

// console.log(arr);

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

// Problem 177

// let massArray = [2, 10, 5, 8, 12];
// let sortArray = [];

// for(let i = 0; i < massArray.length; i++) {
//   let count = 0;
//   for(let j = i; j < massArray.length; j++) {
//     count += massArray[j];
//   }
//   sortArray[sortArray.length] = count;
// }
// console.log(sortArray);

// Problem 178

// let massArray = [2, 10, 5, 8, 12, 1, 2, 3];
// let sortArray = [];
// let countArray = [];
// let count = 0;
// let arrCount = 0;
// for(let i = 0; i < massArray.length; i++){
//   if(massArray[i] < massArray[i + 1]){
//     count++;
//     countArray[countArray.length] = massArray[i];
//   } else{ 
//     countArray[countArray.length] = massArray[i];
//     for(let j = i + 1; j < massArray.length; j++){
//       if(massArray[j] < massArray[j + 1]){
//         arrCount++;
//         sortArray[sortArray.length] = massArray[j];
//       } else{
//         sortArray[sortArray.length] = massArray[j];
//         break
//       }
//     }
//     break
//   }
// }
// if(count >= arrCount){
//   console.log(countArray);
// } else{
//   console.log(sortArray);
// }


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

// Problem 181

// let a = [1, 3, 15, 3]
// let b = [2, 4];
// let c = [];
// for(let i = 0; i < a.length; i++){
//   c[c.length] = a[i];
// }for(let j = 0; j < b.length; j++){
//     c[c.length] = b[j];
// }
// console.log(c);


// Problem 182

// let massArray = [-2, 4, -8, 16, -32];
// let n = 10;
// for(let i = 0; i < massArray.length; i++){
//   if( massArray[i] == n){
//     console.log(`index: ${i}`);
//   }
// }

