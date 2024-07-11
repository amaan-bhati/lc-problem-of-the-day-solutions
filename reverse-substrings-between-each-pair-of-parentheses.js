var reverseParentheses = function (s) {
    while (s.includes('(')) {
        let start = s.lastIndexOf('(');
        let end = s.indexOf(')', start);
        let before = s.slice(0, start);
        let toReverse = s.slice(start + 1, end).split('').reverse().join('');
        let after = s.slice(end + 1);
        s = before + toReverse + after;
    }
    return s;
};
