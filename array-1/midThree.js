midThree = function(nums) {
  var half = Math.floor(nums.length / 2); // 3 --> 1. index is 0,1,2
  var arr = [nums[half-1], nums[half], nums[half+1]];
  return arr;
}
console.log(midThree([1, 2, 3, 4, 5]));