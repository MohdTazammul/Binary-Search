// Given a m x n matrix grid which is sorted in non-increasing order both row-wise and column-wise, return the number of negative numbers in grid.

 

// Example 1:

// Input: grid = [[4,3,2,-1],[3,2,1,-1],[1,1,-1,-2],[-1,-1,-2,-3]]
// Output: 8
// Explanation: There are 8 negatives number in the matrix.
// Example 2:

// Input: grid = [[3,2],[1,0]]
// Output: 0
 

// Constraints:

// m == grid.length
// n == grid[i].length
// 1 <= m, n <= 100
// -100 <= grid[i][j] <= 100
 

// Follow up: Could you find an O(n + m) solution?

var countNegatives = function(grid) {
    var negativeCount = 0;
    for(var i=0; i<grid.length; i++)
        {
            var low = 0, high = grid[i].length-1;
            var negativeIndex = -1;
            while(low<=high)
                {
                    var mid = Math.floor((low+(high-low)/2));
                    // console.log("mid "+mid);
                    
                    if(grid[i][mid] < 0)
                        {
                            negativeIndex = mid;
                            high = mid-1;
                        }
                    else if(grid[i][mid] >= 0)
                        {
                            low = mid+1;
                        }
                }
            if(negativeIndex != -1)
               // console.log(negativeIndex);
                {
                    negativeCount += grid[i].length - negativeIndex;
                }
        }
    return negativeCount;
};