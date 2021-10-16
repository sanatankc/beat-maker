const arr = [
    [0, 1, 2, 3, 4],
    [5, 6, 7, 8, 9],
    [10, 11, 12, 13, 14],
  ];
  
  const vArray = []
  
  for (let j = 0; j < arr.length; j++) {
    for (let i = 0; i < arr[0].length; i++) {
      if (vArray[i]) {
        vArray[i].push(arr[j][i]);
      } else {
        vArray[i] = [arr[j][i]];
      }
    }
  }

console.log(vArray)
vArray.forEach((el,index) => {
    console.log(vArray[0])
    el.forEach((elm,i) => {
        console.log(elm)
    })
})