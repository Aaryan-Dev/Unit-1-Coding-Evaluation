// vYou are given an array stored in a variable with the namearr

// The size of the array is stored in a variable with the nameN

// You have to find the value of the equationx*y,

// where x - sum of even elements in the array
// and y - sum of odd elements in the array

// For example, consider the value stored inN = 4, andarr = [1 2 3 4]

// Therefore, the value ofx = 2 + 4 = 6, and the value ofy = 1 + 3 = 4

// Therefore, the value of the given equation =x*y = 6*4 = 24, which is the required answer

function playingWithArray(N, arr){

    let sum = 0
    let sum1 = 0
  for(i=0; i<arr.length; i++){
      if(arr[i]%2===0){
          sum = sum + arr[i]
      }else{
          sum1 = sum1 + arr[i]
      }
  }
  console.log(sum*sum1);

}