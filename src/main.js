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