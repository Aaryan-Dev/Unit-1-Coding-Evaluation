// You are given a 2D array, such that the dimensions of the 2D Array are stored in the variableNandM

// Each cell of the the 2D array, contains the following symbols -$, %, *

// The meaning of each of the symbols is as follows -'$' -> 7, '%' -> 8, '*' -> 9

// You have to find the sum of the values according to the symbols present in the 2D array, for each row

// For example, consider the value stored inN = 3, andM = 3. The matrix given is as follows

// $%$
// %**
// *$%

// Therefore, converting each symbol into its corresponding number we get
// 787
// 899
// 978

// Now, we have to get the sum of all the values in this matrix, so we get
// 7 + 9 + 7 + 9 + 8 + 9 + 8 + 8 + 7 = 72

// Therefore, 72 is the required answer


function symbolsAndNumbers(N, M, arr){

    let obj = {
        "$" : 7,
        "%" : 8,
        "*" : 9
    }
  
         sum = 0;
     for(i=0; i<N; i++){
         for(j=0; j<M; j++){
          //   console.log(arr[i][j]);
             for(let k in obj){
             if(arr[i][j]==k){
                 sum = sum + (obj[k]);
             }
         }
         }
         }
         console.log(sum);
  
  }