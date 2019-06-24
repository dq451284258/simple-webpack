import { AST_If } from "_terser@4.0.0@terser";

console.log('you are running webpack...now')
/*
 *@Description: 输出数列最大与大小值
 *@MethodAuthor:  dq
 *@Date: 2019-06-21 13:45:37
*/
function highAndLow(numbers){
  
  // let arr = numbers.split(' ').map(n => Number(n))
  // let h = arr[0], l = arr[0]
  // arr.map(a => {
  //   if(a > h) h = a
  //   if(a < l) l = a
  // })
  // return h+' '+l
  numbers = numbers.split(' ').map(Number);
  return Math.max.apply(null, numbers) + ' ' + Math.min.apply(null, numbers);
}

// highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6")

/*
 *@Description: 求数列之间所有数的和
 *@MethodAuthor:  dq
 *@Date: 2019-06-21 13:46:53
*/
function GetSum(a, b) {
  // let max = Math.max.apply(null, [a, b]), min = Math.min.apply(null, [a, b])
  // let c = max - min
  // let d = min, e = min
  // for(let i = 0; i < c; i ++) {
  //   e = e + 1
  //   d += e
  // }
  // return d
  let min = Math.min(a, b), max = Math.max(a, b);
  return (max - min + 1) * (min + max) / 2;
}

// console.log(GetSum(0, -1))

/*
 *@Description: 数字拆分做乘法直到单数
 *@MethodAuthor:  dq
 *@Date: 2019-06-24 13:07:09
*/
function persistence(num) {
  // let num1 = 0;
  // let check = function(num) {
  //   if(num > 9) {
  //     num = num.toString().split('')
  //     let n = 1
  //     for(var i = 0; i < num.length; i ++) {
  //       n = Number(num[i])*n
  //     }
  //     check(n)
  //     num1 += 1
  //   }
  // }
  // check(num)
  // return num1
  var times = 0;
   
  num = num.toString();
  
  while (num.length > 1) {
    times++;
    num = num.split('').map(Number).reduce((a, b) => a * b).toString();
  }
  
  return times;
}

// console.log(persistence(999))

/*
 *@Description: 求连续奇数的行和
 *@MethodAuthor:  dq
 *@Date: 2019-06-24 14:18:19
*/
function rowSumOddNumbers(n) {
  // let arr = []
  // for(var i = 0; i < n; i ++) {
  //   arr.push(n*(n-1)+1+2*i)
  // }
  // return arr.reduce((a, b) => a + b)
  return Math.pow(n, 3);
}
// console.log(rowSumOddNumbers(5))

/*
 *@Description: 实现驼峰式转换
 *@MethodAuthor:  dq
 *@Date: 2019-06-24 14:42:24
*/
function toCamelCase(str){
  // str = str.indexOf('-') > -1 ? str.split('-').reduce((a, b) => a+b.split('')[0].toUpperCase()+b.slice(1)) : str
  // str = str.indexOf('_') > -1 ? str.split('_').reduce((a, b) => a+b.split('')[0].toUpperCase()+b.slice(1)) : str
  // return str
  return str.replace(/[-_]\w/ig, m => m.charAt(1).toUpperCase())
}
// console.log(toCamelCase('the_stealth_warrior'))

/*
 *@Description: 找到数组a2中的数组a1
 *@MethodAuthor:  dq
 *@Date: 2019-06-24 15:16:04
*/
function inArray(array1,array2){
  // return array1.filter(a1 => {
  //   let res = false
  //   array2.map(a2 => {
  //     if(a2.indexOf(a1) > -1) res = true
  //   })
  //   return res
  // }).sort()
  return array1.filter(a1 => array2.find(a2 => a2.match(a1))).sort()
}
// console.log(inArray(["xyz", "live", "strong"], ["lively", "alive", "harp", "sharp", "armstrong"]))

/*
 *@Description: 十进制转十六进制
 *@MethodAuthor:  dq
 *@Date: 2019-06-24 15:53:45
*/
function rgb(r, g, b){
  return [...arguments].map(a => ('0'+(a > 255 ? 255 : (a <= 0 ? 0 : a )).toString(16)).slice(-2).toUpperCase()).reduce((a, b) => a+b)
}
// console.log(rgb(10,125,47))

/*
 *@Description: 是否为narcissistic数
 *@MethodAuthor:  dq
 *@Date: 2019-06-24 16:14:28
*/
function narcissistic(value) {
  return value.toString().split('').map(Number).reduce((a, b, i, arr) => (i == 1 ? Math.pow(a, arr.length) : a) + Math.pow(b, arr.length)) == value
}
console.log(narcissistic(371))