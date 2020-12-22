function orange(){
    console.log("this is orange 1")
    setTimeout(function(){
        console.log("this is orange 2")
        setTimeout(function(){
            console.log("this is orange 2-1")
        },3000)
    },2000)
    console.log("this is orange 3")
}
orange()
