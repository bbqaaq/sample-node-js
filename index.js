const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask() {
	rl.question('Number 1? ', (n1) => {
	    rl.question('Number 2? ', (n2) => {
	        console.log(`result is ${n1 * n2}`)
	        ask()
	    })
	})
}

ask()

