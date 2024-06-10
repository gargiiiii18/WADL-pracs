let nums=[1,2,6,3,17,89];
let min=nums[0];
let max=nums[0];

for(let i=1; i<nums.length; i++){
    if(nums[i]>max){
        max=nums[i];
    }
    if(nums[i]<min){
        min=nums[i];
    }
}

console.log("minimum number is "+min);
console.log("maximum number is "+max);