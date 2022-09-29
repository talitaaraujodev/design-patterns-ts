import isEmail from 'validator/lib/isEmail'
import { EmailValidatorFnProtocol } from './EmailValidatorProtocol'

export const emailValidatorFnAdapter: EmailValidatorFnProtocol = (
  value: string
): boolean => {
  return isEmail(value)
}
