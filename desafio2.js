const num = 0,
eFibonacci = i =>{
    if(0===i||1===i) 
    return !0; let n=1,
    r=2,
    c=0;
    for(;r<=i;){
        if(n+r===i)
        return !0;
        c = n,
        n = r,
        r+=c
    }
    return!1
};
console.log(eFibonacci(8767));