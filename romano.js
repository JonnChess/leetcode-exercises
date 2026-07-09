//Given a roman numeral, convert it to an integer.

var valueMap = function(s) {
        switch (s) {
            case 'I':
                return 1
            case 'V':
                return 5
            case 'X':
                return 10
            case 'L':
                return 50
            case 'C':
                return 100
            case 'D':
                return 500
            case 'M':
                return 1000
        }
}

var romanToInt = function(s) {

    let sum = 0
        
    for(let i = 0; i < s.length; i++) {

        let currentValue = valueMap(s[i])
        let nextValue = valueMap(s[i + 1])

        if(currentValue < nextValue)
            sum -= currentValue
        else
            sum += currentValue
    }

    return sum
};

let result = romanToInt("MCMXCIV")
console.log(result)


