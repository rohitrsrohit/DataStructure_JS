//Take a range from 0-100, find digits that are repeated twice like 33, 77 and so on

let array =[];
for (i=1; i<100; i++ ){
        if (i%11 == 0 ){
            array.push(i);
        }
    }
console.log(array);
