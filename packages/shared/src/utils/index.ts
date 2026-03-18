export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-CA', {
    style: 'currency',
    currency: 'CAD',
  }).format(amount)
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('en-CA', {
    dateStyle: 'medium',
  }).format(date)
}

export function calculateDistance(
  pickupPostalCode: string,
  deliveryPostalCode: string
): number {
  return Math.abs(
    parseInt(pickupPostalCode.substring(0, 3)) -
    parseInt(deliveryPostalCode.substring(0, 3))
  ) * 10
}

export function validateEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return emailRegex.test(email)
}

export function validatePhone(phone: string): boolean {
  const phoneRegex = /^\+?[1-9]\d{1,14}$/
  return phoneRegex.test(phone)
}