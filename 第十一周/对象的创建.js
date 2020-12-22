
var pitaya = {}

var pitaya2 = {
    name:"火龙果",
    price:15,
    origin:"海南省",
    weight:1,
    nut:{
        name:"火龙果 nut"
    },
    printName:function(){
        console.log(this.name);
    }
}
pitaya2.printName();
// pitaty2["printName"]()


function Haw(name,price,origin){
    this.name = name;
    this.price = price;
    this.origin = origin;
    this.printName = function(){
         console.log("this is Haw")
    }
}

Haw.prototype.printPrice = function(){
    console.log("prototype print Prince")
}

var h1 = new Haw("山楂",2,"河南省");
h1.printName()
h1.printPrice()

Haw.printName()
Haw.printPrice()



var h4 = {}
h4.name = ""
function Haw3 (){
    console.log("this is haw");
}



function Object2(){
    this.__proto2__ = apple.prototype2
}

Object2.prototype2 = {
    __proto2__ :null
}

let obj = new Object2()
console.log(obj.__proto2__.__proto2__)