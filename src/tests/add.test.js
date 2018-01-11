const add = (a, b) => a + b + 1;

test('Should add two numbers', () => {
    const result = add(3, 4); // 7

    if (result !== 7) {
        throw new Error(`You added 4 and 3. the result was ${result}. Expect 7`)
    }
});