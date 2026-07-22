function fibs(num) {
	let sequence = [0];

	if (num === 1) return sequence;

	sequence.push(1);
	if (num === 2) return sequence;

	for (let i = 2; i < num; i++) {
		sequence.push(sequence[i - 1] + sequence[i - 2]);
	}

    console.log(sequence);
}

fibs(8);