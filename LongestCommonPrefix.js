/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let current = strs[i]

        prefix = checkPrefix(prefix, current)

    }

    return prefix
};

var checkPrefix = function(prefix, current) {
    let finalPrefix = ""

    for(let i = 0; i < prefix.length && i < current.length; i++) {
        if(prefix[i] === current[i])
            finalPrefix += prefix[i]
        else
            return finalPrefix

    }

    return finalPrefix
}

let prefix = longestCommonPrefix(["cir","car"])

console.log(prefix)

