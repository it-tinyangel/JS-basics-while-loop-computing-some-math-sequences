// 2. arithmetic progression with initial element of 1000 and difference 3
let a = 1000;
while (a <= 9999) {
	document.write(`<h2 style="color: hotpink">${a}</h2>`);
	a += 3;
}

// 3. arithmetic progression with initial element of 1 and difference 2
a = 0;
let n = 1;
while (a < 55) {
	document.write(`<h2 style="color: white">${n}</h2>`);
	n += 2;
	a++;
}

// 4. arithmetic progression with initial element of 90 and a difference of - 5
a = 90;
while (a >= 0) {
	document.write(`<h2 style="color: black">${a}</h2>`);
	a += -5;
}

// 5. geometric progression with initial element 2 and a doubling factor
a = 0;
n = 2;
while (a < 20) {
	document.write(`<h2 style="color: lightcoral">${n}</h2>`);
	n *= 2;
	a++;
}

// 6. all numbers in the sequence 2a - 1 (a counter change step),
// where the initial value of a = 2 and which are less than 10000
a = 2;
while (a < 10000) {
	document.write(`<h2 style="color: lightseagreen">${a}</h2>`);
	a = 2 * a - 1;
}

// 7. all two-digit elements of the sequence 2a + 200 (a counter change step),
// where the initial value of the variable a = -166
a = -166;
while (a < 100) {
	if (a > -100 && a < 100)
		document.write(`<h2 style="color: hotpink">${a}</h2>`);
	a = 2 * a + 200;
}