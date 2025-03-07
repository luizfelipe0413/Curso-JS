function fatorial(n){
    var fat = 1
    for(var c = n;c > 1;c--){
        fat *= c
    }   
    return fat
}
console.log(fatorial(4))
// 5! 5x 4 x 3 x 2 x 1 = 120 