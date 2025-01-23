setTimeout(() => {console.log(`Execution time of priting countPrimerNumbers was ${t1 - t0} milliseconds.`)}, 0);

function countPrimeNumbers() {
	let primes = [];
	for (var counter = 2; counter <= 100; counter++) {
    	var not_prime = false;
    	for (var div = 3; div <= (counter - 1); div++) {
			if (counter % div === 0) {
				not_prime = true;
			}
    	}
    	if (not_prime === false) {
			primes.push(counter);
		}
	}
	return primes;
}

const t0 = performance.now();
for (let i = 0; i <= 100; i++) {
	setTimeout(countPrimeNumbers, 0);
}
const t1 = performance.now();