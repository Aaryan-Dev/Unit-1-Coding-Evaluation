// You are given an array of strings, whose size is stored in a variable with the nameN

// The string array, is stored in a variable with the namearr

// You have to find how many of the strings stored in the array arr, areweak, and how many of them arestrong

// A string is considered as strong if it contains at least one of the following characters in it@,$,#,*

// Consider the example, in which the value stored inN = 4, and the array,arr = ["test123", "new@t", "mon*y", "nrupul"]

// The first string "test123", does not contain any of the required characters, hence the string is weak

// The second string "new@t", contains the character `@`, hence the string is strong

// The third string "mon*y", contains the character `*`, hence the string is strong

// The fourth string "nrupul", does not contain any of the required characters, hence the string is weak
// Therefore, the required output becomesweak strong strong weak


function strongPassword(N,arr){
    
    // let strong = "@$#"
 
      bag = "";
  for(i=0; i<arr.length; i++){
      str= arr[i];
      
      let value = false;
      for(j=0; j<str.length; j++){
      if(str[j]=="@"||str[j]=="$"||str[j]=="#"||str[j]=="*"){
          value = true;
      }else{
        //   console.log("weak");
      }
      }
      if(value){
          bag = bag + "strong"+" ";
      }else{
          bag = bag + "weak"+ " ";
      }
  }
      console.log(bag);
}