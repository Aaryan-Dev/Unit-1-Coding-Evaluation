// In this question, you are given a 2D array stored in a variable with the namearr

// The number of rows in the matrix is stored in the variable with the nameN, while the number of columns stored in the matrix is stored in a variable with the nameM

// You have to find and print the count of prime numbers present in the matrix

// For example, consider the value stored inN = 3, andM = 3, and

// N = 3 M = 3

// arr = [[1 2 3]
//        [4 5 6]
//        [7 8 9]]

function matrixPrimeCheck(N, M, arr) {
  
    var count1 = 0
for(i=0; i<N; i++){
for(j=0; j<M; j++){
    let check = arr[i][j];
    
    let count = 0
    for(k=1; k<=check; k++){
        if(check%k===0){
            count++
        }
    }
      if(count==2){
          count1++
      }
    
}
}
        console.log(count1);
}