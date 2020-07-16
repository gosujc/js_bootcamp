let restaurant = {
    name: 'ASB',
    guestCapacity: 75,
    guestCount: 0,
    checkAvailability: function (partySize) {
        let seatsLeft = this.guestCapacity - this.guestCount
        return partySize <= seatsLeft
    },
    seatParty: function (partySize) {
        this.guestCount = this.guestCount + partySize
    },
    removeParty: function (partySize) {
        this.guestCount = this.guestCount - partySize
    }
}

// seatParty - party to be seated and adds on to guest count
// removeParty - takes the party size leaving the restaurant and leaving the restaurant

restaurant.seatParty(72)
console.log(restaurant.checkAvailability(4)) // false
restaurant.removeParty(5)
console.log(restaurant.checkAvailability(4)) // true