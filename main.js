function cekkomputer(){
        var komputer =['gunting','kertas','batu']
        var index = Math.floor(Math.random() * komputer.length)
        var hasil=komputer[index]
        document.getElementById('enemy').setAttribute("src","img/"+hasil+".png");
        return hasil
}
function logika(com,you){
    if(com==you){
        document.getElementById('same').setAttribute("src","music/cry.mp3")
        return'seri'
    }else if(com == 'gunting' && you =='batu'){
     document.getElementById('win').setAttribute("src","music/menang.mp3"); 
     return 'menang'
    }else if(com == 'gunting' && you =='kertas'){
    document.getElementById('lose').setAttribute("src","music/lose.mp3"); 
    return 'kalah'
    }else if(com == 'kertas' && you =='batu'){
    document.getElementById('lose').setAttribute("src","music/lose.mp3");
    return'kalah'
    }else if(com == 'kertas' && you =='gunting'){
    document.getElementById('win').setAttribute("src","music/menang.mp3");
    return'menang'
    }else if(com == 'batu' && you =='kertas'){
    document.getElementById('win').setAttribute("src","music/menang.mp3"); 
    return'menang' 
    }else if(com == 'batu' && you =='gunting'){
    document.getElementById('lose').setAttribute("src","music/lose.mp3");
    return'kalah'
        }
}
function batu(){
 var com =cekkomputer()
 var you ='batu'
 console.log(logika(com,you))
 document.getElementById('status').textContent = logika(com,you)
 

}
function gunting(){
var com =cekkomputer()
var you ='gunting'
document.getElementById('status').textContent = logika(com,you)
console.log(logika(com,you))

}
function kertas(){
var com =cekkomputer()
var you ='kertas'
document.getElementById('status').textContent = logika(com,you)
console.log(logika(com,you))

}
