function convertToRoman(num){
    if(num>3999) return "This is a dumb counting system. Can't convert numbers greater than 3999!"
    // Numbers greater than 3999 can be processed if we add new symbols!

    // This object is pretty self explanatory
    let obj = {
        1: [1,"I"],
        2: [5,"V"],
        3: [10,"X"],
        4: [50,"L"],
        5: [100,"C"],
        6: [500,"D"],
        7: [1000,"M"]
    }
    let str = "";
    
    // running 7 iterations
    let i = 7;
    do {
        let jump = i -1 -i%2; 
        // with this jump variable, I can determine if the remaining number is within the range of a larger denomination
        // eg: since 9 is 1 less than 10, we write IX instead of VIIII. in this case 9 is within the range of 10
        // i am doing a terrible job at explaining this

        if(num >= obj[i][0]){
            let val = Math.floor(num/obj[i][0]);
            for(let j=0; j<val; j++){
                str = str + obj[i][1];
                num = num - obj[i][0];
            }
        } 

        if (i > 1 && num >= obj[i][0] - obj[jump][0]){
            str = str + obj[jump][1] + obj[i][1];
            num = num - obj[i][0] + obj[jump][0];
        }
        
        i--;
    }
    while(i > 0)

    return str;
}

console.log(
    convertToRoman(1984)
);

// returns MCMLXXXIV
// This is much better than my previous attempts at this problem!!
