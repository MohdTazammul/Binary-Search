// You are given a 0-indexed integer array nums and a target element target.

// A target index is an index i such that nums[i] == target.

// Return a list of the target indices of nums after sorting nums in non-decreasing order. If there are no target indices, return an empty list. The returned list must be sorted in increasing order.

 

// Example 1:

// Input: nums = [1,2,5,2,3], target = 2
// Output: [1,2]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The indices where nums[i] == 2 are 1 and 2.
// Example 2:

// Input: nums = [1,2,5,2,3], target = 3
// Output: [3]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 3 is 3.
// Example 3:

// Input: nums = [1,2,5,2,3], target = 5
// Output: [4]
// Explanation: After sorting, nums is [1,2,2,3,5].
// The index where nums[i] == 5 is 4.
 

// Constraints:

// 1 <= nums.length <= 100
// 1 <= nums[i], target <= 100

var targetIndices = function(nums, target) {
    var l= 0, h = nums.length-1;
    nums.sort(function(a, b){return a - b});
  while(l<=h)
  {
     var mid = Math.floor((l+h)/2);
     if(target < nums[mid])
        h = mid-1;
    else if(target > nums[mid])
        l = mid+1;
    else
    {
        flag = true;
        var x=mid;
        while(nums[--x] == target)
        {}
        x++;
        var count = [];
        count.push(x);
        while(nums[++x] == target)
            count.push(x);
        return count;
    }
  }
  return [];
};