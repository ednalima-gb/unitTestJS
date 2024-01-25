const VerifyPassword = require('../src/verify-password')

describe('Verify password', () => {
    test('Should return exception when parameters is not provided', () => {
        try {
            new VerifyPassword().isStrong()
        } catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })

    test('Should return expection when password < 10 characters', () => {
        try {
            new VerifyPassword().isStrong('123456789')
        } catch (error) {
            expect(error.message).toBe('Password must have 10 characters')
        }
    })

    test('Should return exception when password > 15 characters', () => {
        try {
            new VerifyPassword().isStrong('123456789bcdefge')
        } catch (error) {
            expect(error.message).toBe('Password must have 15 characters')
        }
    })

    test('Should return exception when password does not have numeric characters', () => {
        try {
            new VerifyPassword().isStrong('abcdefg#@!')
        }catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })

    test('Should return exception when password does not alfabetic characters', () => {
        try {
            new VerifyPassword().isStrong('123456789#@!')
        }catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })

    test('Should return exception when password does not have especial characters', () => {
        try {
            new VerifyPassword().isStrong('123456789abc')
        }catch (error) {
            expect(error).toBeInstanceOf(Error)
        }
    })


    test('Should return true when password is strong', () => {
        const result = new VerifyPassword().isStrong('123456789abc@')
        expect(result.isValid).toBe(true)
    })
})