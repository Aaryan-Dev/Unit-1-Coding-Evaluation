// You are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to solve the equation -15*x + 2*y, wherexis the smallest frequency of an element in the array, while

// yis the largest frequency of an element in the array

// For example, consider the value stored inN = 7, andarr = [1 2 2 3 3 3 5]

// The frequency of the different elements in the array are

// 1 -> 1
// 2 -> 2
// 3 -> 3
// 5 -> 1

// The smallest frequency in the array is1, with elements1, and 5 with frequency 1, while the largest frequency in the array is 3
// as3 has a frequency 3. So, the value ofx = 1, and the value ofy = 3

// Therefore, the value of the equation becomes -15*[1] + 2*[3] = 21, which is the required output


function minMAx(N,arr){

    let obj = {};
    
    for(i=0; i<arr.length; i++){
        let key = arr[i];
        if(obj[key]===undefined){
            obj[key]=1;
        }else{
            obj[key]++
        }
    }
    let newArr = [];
     for(let k in obj){
         newArr.push(obj[k]);
     }
  //   console.log(newArr);
     max = -Infinity;
     min = Infinity;
     for(j=0; j<newArr.length; j++){
         if(max<newArr[j]){
             max = newArr[j]
         }if(min>newArr[j]){
             min = newArr[j]
         }
     }
             console.log(15*min + 2*max);
  }