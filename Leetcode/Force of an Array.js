var arr=[], n, mod;
[arr[0], arr[1], n, mod] = [1, 1, 4, 2];

for(var i=2; i<n; i++)
{
    arr[i] = (arr[i-1]+arr[i-2])%mod;
}
arr.sort((a,b)=>{
    return a-b;
})

var sum=0, count=1;
for(var i=0; i<n; i++)
{
    if(arr[i]==arr[i+1])
    {
        count++;
    }
    else{
        // console.log(count);
        sum+=(count**2);
        count = 1;
    }
}

console.log(sum);