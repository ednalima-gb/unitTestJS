class VerifyPassword {
    isStrong(password) {
        if(!password) {
            throw new Error('Password not provided')
        }

        if(password.length < 10) {
            throw new Error('Password must have 10 characters')
        }

        if(password.length > 15) {
            throw new Error('Password must have 15 characters')
        }

        if(password.replace(/[^0-9]/g, '').length < 1) { 
            throw new Error('Password must have numeric characters')
        }

        if(password.replace(/[^aA-zZ]/g, '').length < 1) {
            throw new Error('Password must have alphabet characters')
        }
        
        if(password.replace(/[aA-zZ0-9]/g, '').length < 1) {
            throw new Error('Password must have especial characters')
        }

    

        return {
            isValid: true,
            password
        }
    }
}

module.exports = VerifyPassword