import { LoyaltyUser } from './enums'
import { Price, Country } from './types'

export interface Review {
    name: string; 
    stars: number; 
    loyaltyUser: LoyaltyUser; 
    date: string;   
}