function mergeSort(arr) {
	if (arr.length <= 1) return arr;

	const mid = Math.round(arr.length / 2);
	const arrLeft = arr.slice(0, mid);
	const arrRight = arr.slice(mid, arr.length);

	return merge(mergeSort(arrLeft), mergeSort(arrRight));
}

function merge(left, right) {
	let result = [];

	while (left.length > 0 && right.length > 0) {
		if (left[0] < right[0]) {
			result.push(left.shift());
		} else {
			result.push(right.shift());
		}
	}

	return [...result, ...left, ...right];
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));