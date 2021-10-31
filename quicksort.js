function pivot(arr, start=0, end=arr.length-1) {
    function swap(array, i, j) {
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }

    let pivotVal = arr[start];
    let pivotIdx = start;
    
    for (let i = start + 1; i < arr.length; i++) {
        if (pivotVal > arr[i]) {
            pivotIdx++;
            swap(arr, pivotIdx, i);
        }
    }
    swap(arr, start, pivotIdx);
    return pivotIdx;
}

console.log(pivot([4,8,2,1,5,7,6,3]));