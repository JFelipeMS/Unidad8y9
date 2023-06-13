console.log(process.argv)
for (var x = 2; x < process.argv.length; x++){
    console.log(process.argv[x])
}
console.log(process.memoryUsage())