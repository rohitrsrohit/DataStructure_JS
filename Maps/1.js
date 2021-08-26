let dictionary = new Map([]);
let num = 0;
let key = 1;
let count = 0;
while (count < 10 ){
        num = Math.floor(Math.random()*(7-1)+1 );    //Dice number between 1 to 6
        dictionary.set(num,key);                     
        key++;
        count++;
}
for(let [key, value] of dictionary)
console.log("Key : " +key +" values : " +value)

let occurences = Array.from(dictionary.values());
let max = Math.max(...occurences);
dictionary.forEach((value, key) => {                     //Number reaching maximum times
        if (value == max) {
                console.log("Maximum number of times reached : " + key + " occurring " + value + " times");
        }
    })
let min = Math.min(...occurences);
dictionary.forEach((value, key) => {
        if (value == min) {                                          //number reaching minimum times
            console.log("Minimum number of times reached : " +key + " occurring " + value + " times");
        }
    })