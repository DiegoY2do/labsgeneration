const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ];
  
arr[2].push(30);

arr.push([31, 32, 33, 34, 35, 36, 37, 38, 39]);

arr[2].splice(9,1);

arr[3].reverse();

arr.forEach(element => console.log(element));