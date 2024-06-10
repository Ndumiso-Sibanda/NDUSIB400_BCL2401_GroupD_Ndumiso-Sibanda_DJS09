const reviewTotalDisplay = document.querySelector('#reviews') as HTMLElement
const returningUserDisplay = document.querySelector('#returning-user') as HTMLElement
const userNameDisplay = document.querySelector('#user') as HTMLElement

enum Permissions {
    ADMIN = 'ADMIN', 
    READ_ONLY = 'READ_ONLY'
}