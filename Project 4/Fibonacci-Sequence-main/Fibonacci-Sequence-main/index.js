function fibonacci(n){
    for(var fibonacciArray = [0,1], i=0,j=1,k=0; k<n;i=j,j=x,k++ ){
        x=i+j;
        fibonacciArray.push(x);
    }
    console.log(fibonacciArray);
}

//calling fibonacci
fibonacci(50)