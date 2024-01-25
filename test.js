const password = 'asdas$$$$#@#asdasd'

console.log(password.replace(/[^0-9]/g, '').length)
console.log(password.replace(/[^aA-zZ]/g, ''))
console.log(password.replace(/[aA-zZ0-9]/g, ''))
console.log(password.replace(/[A-Z]/g, ''))

console.log(password)