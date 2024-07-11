//Reverse substrings between each pair of parentheses
//11th-july-2024
//String, Stack
var reverseParentheses = function (s) {
    //find the innermost parentheses
    while (s.includes('(')) {
        let start = s.lastIndexOf('(');
        let end = s.indexOf(')', start);
        //reverse the substring inside the parentheses
        let before = s.slice(0, start);
        let toReverse = s.slice(start + 1, end).split('').reverse().join('');
        let after = s.slice(end + 1);
        //reconstruct the string without the innermost parentheses
        s = before + toReverse + after;
    }
    return s;
};
