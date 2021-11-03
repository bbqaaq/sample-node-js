const readline = require("readline")

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function ask() {
	rl.question('Number 1? ', (n1) => {
	    rl.question('Number 2? ', (n2) => {
	        console.log(`Multiply result is ${n1 * n2}`)
	        ask()
	    })
	})
}

ask()

const http = require('http')

const requestListener = function (req, res) {
  res.writeHead(200)
  res.end('Hello, World!')
}

const server = http.createServer(requestListener)
server.listen(3000)