
console.log("JS - My container is online!"); 

const fibonacci = n => {
    let n1 = 0, n2 = 1, nterms = n, count = 0;
    
    while (count < nterms){
      console.log(n1);
      let nth = n1 + n2;
      n1 = n2;
      n2 = nth;
      count += 1;
    }
  };

  fibonacci(50);