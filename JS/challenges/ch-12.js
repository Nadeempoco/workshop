// WEEK 5 → DAY 2 dont publish nadeem
// Strictly Increasing or Decreasing

function check(arr) {
	if (new Set(arr).size !== arr.length) {
		return 'neither';
	} else if (arr[1] > arr[0]) {
		return 'increasing';
	} else {
		return 'decreasing';
	}
};

print(check([1, 2, 3, 4, 5]));
print(check([5, 4, 3, 2, 1]));
print(check([1, 2, 2, 4, 5]));