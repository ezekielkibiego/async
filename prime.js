let sum = 0;

for (let i = 2; i <= 100; i++) {
    let isPrime = true;
    for (j = 2; j <= Math.sqrt(i); j++) {
        if (i % j === 0) {
            isPrime =false;
            break;
        }
        
    }
    if (isPrime) {
        sum += i
    }
}

console.log(sum);