// Array Bubble sort

function bubble(array){
    let len= array.length;
    for(let i= 0; i< len -1; i++){
        for(let j= 0; j< len-1; j++){
            if(array[j]> array[j+1]){
                let temp= array[j];
                array[j]= array[j+1];
                array[j+1]= temp;
            }
        }
    }
    return array;
}
let array= [5, 3, 8, 4, 2];
console.log("Unsorted array "+ array);
console.log("Sorted array "+ bubble(array));