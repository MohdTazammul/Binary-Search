// Given two integer arrays nums1 and nums2, return an array of their intersection. Each element in the result must be unique and you may return the result in any order.

 

// Example 1:

// Input: nums1 = [1,2,2,1], nums2 = [2,2]
// Output: [2]
// Example 2:

// Input: nums1 = [4,9,5], nums2 = [9,4,9,8,4]
// Output: [9,4]
// Explanation: [4,9] is also accepted.
 

// Constraints:

// 1 <= nums1.length, nums2.length <= 1000
// 0 <= nums1[i], nums2[i] <= 1000

var intersection = function(nums1, nums2) {
    var count=[], map = {};
    for(var i=0; i<nums1.length; i++)
        {
            if(map[nums1[i]] == undefined)
                {
                    map[nums1[i]] = 0;
                    var map2= {};
                    for(var j=0; j<nums2.length; j++)
                        {
                            if(map2[nums2[j]] == undefined)
                                {
                                    map2[nums2[j]] = 0;
                                    if(nums1[i] == nums2[j])
                                        count.push(nums1[i]);
                                }
                        }
                }
        }
    return count;
};