//	console input
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

//	mongo
const mongoose = require("mongoose")

mongoose.connect('mongodb://localhost:27017/sample-node-js')

const TestSchema = new mongoose.Schema({
	id: { type: Number, unique: true },
	value: { type: Number }
})
const Test = mongoose.model('Test', TestSchema)

//	https
const http = require('http')

const server = http.createServer((req, res) => {
	if (req.url === '/favicon.ico') {
		res.writeHead(200)
		res.end('Hello, World!')
	} 
	else {
		Test.findOneAndUpdate({ id: 1 }, { $inc: { value: 1 } }, { upsert: true }, (err, result) =>{
			// console.log('result = ', result)
			res.writeHead(200)
			res.end(`DB value = ${result.value}`)
		})
    }	
}).listen(3000)