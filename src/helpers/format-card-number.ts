export function formatCardNumber(cardNumber = '') {
  return cardNumber
    .replace(/\D/g, '')
    .replace(/(\d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4})(\d)/, '$1 $2')
    .replace(/(\d{4} \d{4} \d{4})(\d)/, '$1 $2')
}