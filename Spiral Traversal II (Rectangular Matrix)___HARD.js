// You are given a matrix of size N x M.

// Print the spiral traversal of the matrix.

// Refer the image given below, for better understanding.


function spiralTraversal(N, M, arr){
   function spiralTraversal(N, M, arr){
    
let top = 0;
left =0;
bottom = N-1;
right = M-1;
count = 0;
bag = "";
while(count<N*M){
    for(i=top; i<=bottom && count <N*M ; i++){
     bag = bag + (arr[i][left])+" ";
     count++;
    }
    left++;
    for(i=left; i<=right && count <N*M ; i++){
      bag = bag +(arr[bottom][i])+" ";
      count++;
    }
    bottom--;
    for(i=bottom; i>=top && count <N*M ; i--){
         bag = bag +(arr[i][right])+" ";
    count++;
    }
    right--;
    for(i=right; i>=left && count <N*M; i--){
         bag = bag +(arr[top][i])+" ";
        count++;
    }
    top++;
}
  console.log(bag);
  
}
  
}
