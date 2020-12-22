
function Chestnut (name,price,origin,weight){
    this.name = name,
    this.price = price,
    this.origin = origin,
    this.weight = weight
    this.printName = function(){
        console.log("this is "+ this.name)
    }
}
Chestnut.prototype.printName2=function(){
    console.log("this is chestnut prototype");
}

let che1 = new Chestnut("大栗子",20,"江西",12)
che1.printPrice= function(){
    console.log("this os price " + this.price)
}
che1.pricePrice()

console.log(che1.__proto__)
console.log(Chestnut.prototype)


let obj1 = new Object({})
obj1.name = "张三"
console.log(obj1.__proto__.__proto__)




function Object2(){
    this.__proto2__ = Object2.prototype2
}
Object2.prototype2 = {
    __proto2__ :null
} 

let o1 = new Object2()
console.o1(obj1.__proto2__.__proto2__)

//模板字符串
function pear(name){
    return "this is " + `${name}`
}

console.log(pear("大桃子"))

let str = 'rturn' + '我是`${name}`';
let func = new Function('name',str)
console.log(func("大桃子"))

function func(name){
    return "我是"+name
}










