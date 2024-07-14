//Number of atoms
//14th-july-2024
//hash table, stack, string, sorting

function countOfAtoms(formula) {
    const stack = [];
    const counts = new Map();
    let i = 0;

    function parseNumber() {
        let num = 0;
        while (i < formula.length && /^\d$/.test(formula[i])) {
            num = num * 10 + parseInt(formula[i]);
            i++;
        }
        return num || 1;
    }

    function parseElement() {
        let element = formula[i++];
        while (i < formula.length && /[a-z]/.test(formula[i])) {
            element += formula[i++];
        }
        return element;
    }

    function addToCounts(element, count) {
        counts.set(element, (counts.get(element) || 0) + count);
    }

    while (i < formula.length) {
        if (formula[i] === '(') {
            stack.push(new Map(counts));
            counts.clear();
            i++;
        } else if (formula[i] === ')') {
            let count = parseNumber();
            let tempCounts = counts;
            count = stack.pop();
            i++;
            while (i < formula.length && /^\d$/.test(formula[i])) {
                count = count * 10 + parseInt(formula[i]);
                i++;
            }
            for (const [element, freq] of tempCounts.entries()) {
                addToCounts(element, freq * count);
            }
        } else {
            let element = parseElement();
            let count = parseNumber();
            addToCounts(element, count);
        }
    }

    let result = '';
    for (const [element, freq] of [...counts.entries()].sort()) {
        result += element;
        if (freq > 1) {
            result += freq;
        }
    }

    return result;
}
