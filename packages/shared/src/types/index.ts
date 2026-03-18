export interface User {
  id: string
  email: string
  name?: string
  phone?: string
  createdAt: Date
}

export interface Vehicle {
  id: string
  make: string
  model: string
  year: number
  vin?: string
  licensePlate?: string
  color?: string
  createdAt: Date
}

export type BookingStatus = 
  | 'PENDING'
  | 'CONFIRMED'
  | 'IN_TRANSIT'
  | 'DELIVERED'
  | 'CANCELLED'

export interface Booking {
  id: string
  userId: string
  vehicleId: string
  pickupAddress: string
  deliveryAddress: string
  pickupDate: Date
  deliveryDate?: Date
  status: BookingStatus
  quoteAmount: number
  finalAmount?: number
  notes?: string
  createdAt: Date
  updatedAt: Date
  user?: User
  vehicle?: Vehicle
}

export interface QuoteRequest {
  vehicleMake: string
  vehicleModel: string
  vehicleYear: number
  pickupPostalCode: string
  deliveryPostalCode: string
  pickupDate: Date
}

export interface QuoteResponse {
  quoteId: string
  amount: number
  estimatedDeliveryDate: Date
  breakdown: {
    baseRate: number
    distanceFee: number
    vehicleTypeFee: number
    serviceFee: number
  }
}