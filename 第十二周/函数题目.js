// 第三道题目 请说出下面程序的运行结果
; (function (x) { 
    console.log("this is chestnut") 
    return ((x) => function () { 
        console.log("this is haw") 
        x.printName= function(){ 
            console.log("this is x().printName") 
            return this.name 
        }
            return 200 + x.printName() + x() 
        }())(() => { this.name=6666;
            console.log("this is pitaya"); 
            return 3999 }) 
        })()
//  答案： 
// this is chestnut     
// this is haw
// this is x().printName
// this is pitaya  


// 第四道题目 请说出下面程序的运行结果
+function $(){ 
    -function(){ 
        console.log("this is pear") 
        void function(){ 
            console.log("this is nut") 
            console.log($.name)
         }() 
        }() 
        this.name="my name is $" 
    }()
// 答案：
// this is pear
// this is nut
// $


// 第五道题目 完善代码，计算出 单价和数量的乘积
function watermelon (name,price,number){ 
    this.name = name, 
    this.price = price, 
    this.number = number 
}
watermelon.prototype.getSum = function (){ 
    console.log(this.number * this.price) 
}


// 第六题目 请说出下列代码的意图
function $2(x){ 
    //console.log(typeof x) 
    if(typeof x == "string"){ 
        let targets = window.document.getElementsByTagName(x) 
        if(targets.length>0){ 
            let array = targets;
            for (let index = 0; index < array.length; index++) { 
                const element = array[index]; 
                element.style.backgroundColor="red" 
            } } 
        } 
    }
    $2("div")

    // 第七题目 请说出下面的运行结果
    //如何去遍历这个数组 
    var lichees = [ 
        () => {
             return function () { 
                 console.log("this is number 1")() 
                } 
            },
            +function(){console.log("this is number 2")}(),
           { 
                name:"this is lichee 3" 
            },
             2000, 
             "this is lichee 4",
              null, 
              new Object({}), 
              Object.create({}), 
              Object.prototype, 
              new Object({}).__proto__, 
              new Date(),
              function licheeNut(){ 
                  return { 
                      printNut:()=>{ 
                          console.log("thisis printNut") 
                        } 
                    } 
                },
                Object.prototype.tag = "this is tag", 
                Object.tag 
        ]

        
//第九题
        ;(console.log(1000/function(){
            console.log("this is anonymous function "); 
            return function(){return 2000/2}()}()))