function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(num: number) {
    console.log('Result '+ num);
}

printResult(34);

let combineValues: (n1: number, n2: number)=> number;

combineValues = add;

console.log(combineValues(8,8));