/* frontPiece
Given an int array of any length, return a new array of its first 2 elements. If the array is smaller than length 2, use whatever elements are present. 

frontPiece({1, 2, 3}) → {1, 2}
frontPiece({1, 2}) → {1, 2}
frontPiece({1}) → {1}
*/

var frontPiece = function(nums) {
  if (nums.length < 2)
    return nums;
  var arr = [ nums[0], nums[1] ];
  return arr;
}


console.log(frontPiece([1, 2, 3]))	    
console.log(frontPiece([1, 2])	 )   
console.log(frontPiece([1])	    )
console.log(frontPiece([])	    )
console.log(frontPiece([6, 5, 0])  )  
console.log(frontPiece([6, 5])	  )  
console.log(frontPiece([3, 1, 4, 1, 5])	 )   
console.log(frontPiece([6]))