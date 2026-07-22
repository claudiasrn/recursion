function fibs(num) {
    if (num < 0) return undefined

	let sequence = [0];

	if (num === 1) return sequence;

	sequence.push(1);
	if (num === 2) return sequence;

	for (let i = 2; i < num; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2]);
	}

	return sequence;
}

console.log(fibs(8));

function fibsRec(num, sequence = [0], index = 1) {
    if (num < 0) return undefined

	if (num === 1 || index >= num) {
		return sequence;
	}

	if (index === 1) {
		index++;
		sequence.push(1);
		if (num === 2) {
			return sequence;
		}
	}

	sequence.push(sequence[index - 1] + sequence[index - 2]);
	index++;

	return fibsRec(num, sequence, index);
}

console.log(fibsRec(8));
