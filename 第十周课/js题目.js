

//第一道题 请说出程序的运行结果 
var nut = function(){ 
    console.log("this is nut-1") 
    return "this is nut-2" 
}
nut()
//答案：this is nut-1


//第二道题目 请说出程序的运行结果 
var lichee = function (){ 
    console.log("this is lichee-1") 
    return "this is lichee-2" 
}()    //直接打印
//答案：this is lichee-1


//第三道题目 如何让pear也能运行并输出结果 
var watermelon = function(){ 
    console.log("this is watermelon-1") 
    return ()=>
    function pear(){ 
        console.log("this is pear-1")
    } ()
}
//答案：
watermelon()()


//第四道题目 请说出程序的运行结果 
let banana = function banana(){ 
    console.log("this is banana-1") 
    return ()=> function(){
        console.log("this is Anonymous function")
    }() 
}
banana()()
//答案：this is banana-1  this is Anonymous function


//第五道题目 如何打印出 this is MyGrapNut 
let grape = function redGrape(){ 
    return { 
        name:"my name is red grape", 
        printMyName:()=>{ 
            return ()=>{ 
                return Object.create({ 
                    name:"my name is grape nut", 
                    printMyGrapeNut:function(){ 
                        console.log("this is MyGrapNut") 
} }) } } } }
grape().printMyName()().printMyGrapeNut()


//第六道题目 请说出程序的运行结果 
var redPlum = ()=>{ 
    return 100 
}
var bluePlum =(blue)=>{ 
    return 200 * blue() 
}
var plum = (plum2,plum1)=>{ 
    let result = plum1(plum2) 
    console.log(result); 
}
plum(redPlum,bluePlum)
//答案：20000


//第七道题目 请 在console.log里面完善代码，并使得程序运行打印出 
//this is red apple 和 this is blue apple 
let red = function redApple(){ 
    return ()=>{ 
        return function(){ 
            return ()=>{ 
                return function(){ 
                    console.log("this is red apple") 
                    return "this is blue apple" 
}} } } }
//答案：
   red()()()()()
let apple = function redApple(){ 
    console.log("请在这里完善代码") 
}()


//第八道题目 请说出程序的运行结果 
//(闭包)
(function(x){ 
    x() 
    console.log("this is yellow orange") 
    console.log(
        function blueOrange(){ 
        console.log("this is blue orange") 
    }()
    ) 
  }
 )
(function(){ 
    console.log("this is orange")
     return "this is red orange" 
    }
  )
//答案：this is orange   this is yellow orange  this is blue orange 


  //第九道题目 如果想把 this is small orange 和 this is big orange 都打印出来如何操作 
  var blackOrange = ()=> 
  function(){
      console.log("this is small orange") 
      return function(){ 
          console.log("this is big orange") 
        }()
}()
blackOrange() //答案


//第十道题目 补充程序代码，运行打印出 9999 
let blackberry = function (){ 
    console.log("this is blackberry") 
    return { 
        smallBlackberry: ()=>{ 
        console.log("this is smallBlackberry") 
        return ()=>{ 
            console.log("this is smallBlackberry nut " ) 
        return 9999 
    } 
} 
} 
}()
console.log(blackberry.smallBlackberry()())


//第十一道题目 请说出程序的运行结果 
function bigNut(func){ 
    let smallNut = function (s){ 
        s() 
        console.log("this is small nut") 
        return 200 
    }
        let middleNut = function(m){ m() 
            console.log("this is middle nut") 
            return 300 
        }
            return func(smallNut,middleNut) 
        }

        function redNut(x,y){ 
            function blueNut(){ 
                console.log("this is blueNut") 
            }
            function yellowNut(){ 
                console.log("this is yellowNut") 
            }
                return ()=>{ 
                    console.log(x(blueNut)+y(yellowNut)) 
                } 
            }
            bigNut(redNut)()
            //答案：this is blueNut  this is small nut  this is yellowNut
            // this is middle nut  500


//第十二道题目 
var haw = (x,y)=>{ 
    return ()=>{ 
        x(y) }
}
function lichee(li){ 
    console.log(li()) 
}
function nut(){ 
    console.log("this is nut"); 
    return "this is lichee" 
}
haw(lichee,nut)()