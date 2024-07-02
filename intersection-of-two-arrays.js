var intersect = function(nums1, nums2) {
    const numCount1 = createNumCountMap(nums1);
    const numCount2 = createNumCountMap(nums2);
    const result = [];

    for (const num of numCount1.keys()) {
        if (numCount2.has(num)) {
            const count = Math.min(numCount1.get(num), numCount2.get(num));
            result.push(...Array(count).fill(num));
        }
    }

    return result;
}

function createNumCountMap(nums) {
    const numCountMap = new Map();
    
    for (const num of nums) {
        numCountMap.set(num, (numCountMap.get(num) || 0) + 1);
    }
    
    return numCountMap;
};
