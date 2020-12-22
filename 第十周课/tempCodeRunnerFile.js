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