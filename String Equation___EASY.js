// You are given a string stored in a variable with the namestr, containing a mix of upper case and lower case English characters

// The length of the string is stored in stored in a variable with the nameN

// You have to solve the equation5*x + 3*y, wherexis the number of small case English characters in the string,

// whileyis the number of upper case English characters in the string

// For example, consider the value stored inN = 5, andstr = AmanZ

// The number of upper case characters in the string is 2 -A, Z, and the number of small case characters in the string is 3 -m,a,n

// Therefore, the value of the equation5*x + 3*y, becomes5*3 + 3*2 = 21, which is the required answer


function StringEquation(N, str) {
  
    let lower = "abcdefghijklmnopqrstuvwxyz";
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    
    let count = 0
    let count1 = 0
    for(i=0; i<str.length; i++){
        for(j=0; j<lower.length; j++){
            if(str[i]==lower[j]){
                count++
            }else if(str[i]==upper[j]){
                count1++
            }
        }
    }
    console.log(5*count + 3*count1);
  }s