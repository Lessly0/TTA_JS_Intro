// Selection Sort

function selectionSort(array) {
  let len = array.length;
  for (let i = 0; i < len; i++) {
    let min = i;// min= i=0
    for (let j = i + 1; j < len; j++) {
      if (array[min] > array[j]) {
        min = j;//min=j=i
      }
    }
    if (min!== i) {
        let temp = array[i];
        array[i] = array[min];
        array[min] = temp;
    }
  
  }
  return array;
}

let  array = [5, 3, 8, 4, 2];
console.log("Unsorted array " + array);
console.log("Sorted array " + selectionSort(array));