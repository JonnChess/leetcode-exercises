/**
 * @param {string} s
 * @return {boolean}
 */


var isValid = function(s) {
    const map = new Map([
        ['(', ')'],
        ['[', ']'],
        ['{', '}']
    ])

    let existPair = true

    for(let i = 0; i < s.length && existPair; i++) {
        
        let currentBracket = s[i]
        let neededPair = ''

        switch(currentBracket) {
            case '(':
                neededPair = ')'
            case '[':
                neededPair = ']'
            case '{':
                neededPair = '}'
        }

        for(let j = i + 1; j < s.length; j++) {
            if ((currentBracket !== '(' && currentBracket !== '[') && currentBracket !== '{')
                break
//()
            if (neededPair === s[j]) {
                existPair = true
                break
            }
            else if (s[j] === ')' || s[j] === ']' || s[j] === '}') {
                let pair
                let found = false
                switch(s[j]) {
                    case ')':
                        pair = '('
                    case ']':
                        pair = '['
                    case '}':
                        pair = '{'
                }
                for(let k = j - 1; k >= 0; k--) {
                    if(pair === s[k]){
                        found = true
                        existPair = false
                        break
                    }
                    else if (!found && k === 0)
                        return false
                }
            }
            else
                existPair = false
        }
    }

    return existPair
};

console.log(isValid('()'))

