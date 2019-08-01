

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
// console.log(narcissistic(371))

/*
 *@Description: 数组中找到出现奇数次的整数
 *@MethodAuthor:  dq
 *@Date: 2019-06-25 13:57:04
*/
function findOdd(A) {
  // let a = [...new Set(A)]
  // let t = 0, n = ''
  // for(let i = 0; i < a.length; i ++) {
  //   for(let j = 0; j < A.length; j ++) {
  //     if(a[i] == A[j]) {
  //       t++
  //     }
  //   }
  //   if(t%2 == 1) {
  //     n = a[i]
  //     break;
  //   };
  // }
  // return n
  return A.reduce((a, b) => a ^ b)
}
// console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5]))

/*
 *@Description: 字符串相邻去重转数组
 *@MethodAuthor:  dq
 *@Date: 2019-06-25 14:20:48
*/
var uniqueInOrder=function(iterable){
  if(!iterable.length) return []
  let arr = [...iterable], a = []
  for(let i = 0; i < arr.length-1; i ++) {
    if(arr[i] !== arr[i+1]) a.push(arr[i])
  }
  a.push(arr.pop())
  return a
}
// console.log(uniqueInOrder('AAAABBBCCDAABBB'))

/*
 *@Description: 数组和中间数
 *@MethodAuthor:  dq
 *@Date: 2019-06-25 16:00:53
*/
function findEvenIndex(arr)
{
  // let a = -1
  // for(let i = 0; i < arr.length; i ++) {
  //   let arr1 = [...arr].splice(0, i).length ? [...arr].splice(0, i).reduce((a, b) => a+b) : 0
  //   let arr2 = [...arr].splice(i+1, arr.length).length ? [...arr].splice(i+1, arr.length).reduce((a, b) => a+b) : 0
  //   if(arr1 == arr2) a = i
  // }
  // return a
  for(var i=1; i<arr.length-1; i++) {
    if(arr.slice(0, i).reduce((a, b) =>  a+b) === arr.slice(i+1).reduce((a, b) =>  a+b)) {
      return i;
    }
  }
  return -1;
}
// console.log(findEvenIndex([1,2,3,4,3,2,1]))

/*
 *@Description: 字母的+-*\
 *@MethodAuthor:  dq
 *@Date: 2019-06-25 18:10:30
*/
function zero() {}
function one() {}
function two() {}
function three() {}
function four() {}
function five() {
  return 5
}
function six() {}
function seven() {
  let times = /\*/g
  if(times.test(arguments[0])) return 7 * arguments[0].split('*')[1]
  else return 7
}
function eight() {}
function nine() {}

function plus() {}
function minus() {}
function times() {
  return '*'+arguments[0]
}
function dividedBy() {}
// console.log( seven( times( five() ) ) )

const Circus = function(circus) {
  this.n = circus && circus.n ? circus.n : 12 //格子数
  this.m = circus && circus.m ? circus.m : 1 //倍率
  /*
  *@Description: 获取字母表
  *@MethodAuthor:  dq
  *@Date: 2019-07-29 11:31:18
  */
  this.getWord = () => {
    let arr = []
    for(let i = 0; i < 26; i ++) {
      arr.push(String.fromCharCode(65+i))
    }
    return arr
  }
  /*
  *@Description: 数组随机排列
  *@MethodAuthor:  dq
  *@Date: 2019-07-29 10:02:34
  */
  this.randomArray = () => {
    let arr_arr = this.getWord().splice(0, this.n)
    let arr = this.findLastReplace(JSON.stringify(arr_arr))
    for(let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    console.log(arr)
    return arr
  }
  /*
  *@Description: L随机替换
  *@MethodAuthor:  dq
  *@Date: 2019-07-29 13:33:35
  */
  this.findLastReplace = (arr_str) => {
    let new_arr = JSON.parse(arr_str)
    let back_arr = JSON.parse(arr_str)
    if(this.m < 1) {
      let num = (1 - this.m)*10
      for(let i = 0; i < num; i ++) {
        back_arr.concat(JSON.parse(arr_str))
      }
    }
    for(let i = 0; i < this.m; i ++) {
      back_arr.push('joke')
    }
    new_arr[new_arr.length - 1] = back_arr[Math.floor(Math.random() * back_arr.length)]
    return new_arr
  }
  /*
   *@Description: 测试爆率
   *@MethodAuthor:  dq
   *@Date: 2019-07-29 15:57:28
  */
  this.run = () => {
    let i = 0
    let timer = setInterval(() => {
      let arr = this.randomArray()
      if(JSON.stringify(arr).indexOf('joke') !== -1) {
        console.log('获取到joke，共计'+ i + '次')
        i = 0
        clearInterval(timer)
      }
      i ++
    }, 100)
  }
}
let c = new Circus({m: 0.1})
// c.run()
// console.log(c.randomArray())