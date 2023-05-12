/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, n) {
    if(n == 1){return s}
    a = ""
    e = Math.ceil(s.length/(2*n-2))
    for (var j = 0; j < n; j++){
        for(var i = 0; i < e; i++){
            g = i*(2*n-2) + j
            a += s[g] ? s[g] : ""
            k = (i+1)*(2*n-2) - j
            if(j > 0 && j < n -1  && s[k]){
                a += s[k] ? s[k] : ""
            }
        }
    }
    return a
};
