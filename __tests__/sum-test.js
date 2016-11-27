

test('test 1 + 2 equals 3', () => {
	const sum = require('../components/sum');
	expect(sum(1, 2)).toBe(3);
});