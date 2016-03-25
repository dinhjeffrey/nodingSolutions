/* maxTriple
Given an array of ints of odd length, look at the first, last, and middle values in the array and return the largest. The array length will be a least 1. 

maxTriple({1, 2, 3}) → 3
maxTriple({1, 5, 3}) → 5
maxTriple({5, 2, 3}) → 5
*/

var maxTriple = function(nums) {
  var half = Math.floor(nums.length / 2); // 3 --> 1. index is 0,1,2
  var arr = [nums[0], nums[half], nums[nums.length-1]]
  var max = 0;
  for (var i=0; i<arr.length; i++){
  	if (arr[i] > max)
  		max = arr[i]
  }
  return max
}
console.log(maxTriple([1, 2, 3]))
console.log(maxTriple([1, 5, 3]))	
console.log(maxTriple([5, 2, 3]))	    
console.log(maxTriple([1, 2, 3, 1, 1]))	    
console.log(maxTriple([1, 7, 3, 1, 5]))   
console.log(maxTriple([5, 1, 3, 7, 1])	)    
console.log(maxTriple([5, 1, 7, 3, 7, 8, 1]) )  
console.log(maxTriple([5, 1, 7, 9, 7, 8, 1]))  
console.log(maxTriple([5, 1, 7, 3, 7, 8, 9]))	   
console.log(maxTriple([2, 2, 5, 1, 1]))