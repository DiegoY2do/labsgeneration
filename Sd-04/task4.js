const arr = [1,2,3,4,5,5,6,7,8,9,10,11,12,13,14];

for (let i = 1; i < arr.length; i++) {
        if(arr[i] === arr[i -1]){
            arr.splice(i, 1);
            i--;
        }
}

arr.forEach(element => console.log(element))


