// 课程：https://www.bilibili.com/video/BV1Xy4y1v7S2?p=5
export {} // 避免编辑器报错 doc: https://blog.csdn.net/qzw752890913/article/details/118334222

// object 表示一个 js 对象，但 js 内万物皆对象，这样声明无意义
let a: object
a = {}
a = function () {
  
}


/**
 * 对象
 */
// {} 类型可用来指定对象中可以包含那些属性
// 属性后加上 ? 表示属性是可选的
let b: { name: string, age?: number }
b = { name: 'jack', age: 18 }


// [ propName: string ]: any 表示任意类型值的键值对
let c: { name: string, [ propName: string]: any }
c = { name: 'jason', age: 10, gender: 'male' }


/**
 * 函数
 */
let d: ( a: number, b: number) => number
d = ( p1, p2) => {
  return p1 + p2
}


/**
 * 数组
 * 语法：
 * 类型[] 
 * Array<类型>
 */
let e: string[]
// let e: Array<string>
e = [ 'a', 'b', 'c' ]


/**
 * tuple 元组：就是固定长度的数组
 * 语法 [ 类型, 类型, 类型 ]
 */
let h: [ string, number ]
h = [ 'hello', 9527 ]


/**
 * enum 枚举
 */
enum Gender {
  Male = 1,
  Female = 2
}

let i: { name: string, gender: 1 | 2 }
i = {
  name: 'winner',
  gender: Gender.Female
}


// 类型别名（自定义类型）
type myType = 1 | 2 | 3 | 4 | 5
let k: myType
let l: myType