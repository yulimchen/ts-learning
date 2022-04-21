// 可以直接字面量进行类型声明，就不可赋以外的值
let a: 10
a = 10

// 可以使用 | 来进行多个类型声明（联合类型）
let b: "male" | "female"
b = "male"
b = "female"
let c: boolean | string
c = false
c = "hello"

// any表示任意类型，一个变量设置为any类型相当于TS对该变量关闭了类型检测
// 不做类型声明的变量TS默认判断为any类型（隐式any）
// let d: any
let d
d = 123
d = "hello"
d = []
d = false

// 注：any类型的变量d可以赋值给任何类型的变量不报错，所以TS不建议随意使用any类型
let s: string
s = d

let e: unknown
e = 123
e = "hello"
e = true
// unknown 实际上是一个类型安全的any
// unknown 类型变量不能赋值给其他类型的变量
s = e
// 除非做了类型检查
if (typeof e === "string") {
  s = e
}

// 类型断言，可以用来告诉解释器变量的实际类型
s = e as string
s = <string>e
/**
 * 类型断言语法
 *  变量 as 类型
 *  <类型>变量
 */

// void 用来表示空，以函数为例表示没有返回值的函数
function fn(): void{
  
}
// never 表示永远不会返回结果（少用）
function fn2(): never{
  throw new Error('报错啦')
}