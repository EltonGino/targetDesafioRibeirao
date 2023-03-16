console.log("questão a")
function eImpar(n) {
	return Boolean(n % 2);
  }
  
  function soma(n) {
	let sum = 0;
  
	for (var i = 0; i < n; i++) {
	  if (eImpar(i)) {
		sum += i;
	  }
	}
	return sum;
  }
  
  console.log(soma(7));


console.log("questão b")
let n = 200
for(let i = 1; i <= n; i*=2){
	console.log(i+" ")
}


console.log("questão c")
sum = 0;
for (i = 1; i <= 13; i += 2){
  sum += i;
}
console.log(sum);

console.log("questão d")
function aoQuadrado(numbers){
	let quadrado = numbers.reduce((acc, valAtual) => {
	  return acc + valAtual ** 2;
	}, 0);
	return quadrado;
  }

  console.log(aoQuadrado([10]))

