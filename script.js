// Price Update //
function priceUpdate(id, isIncrease) {
    const ticketInput = document.getElementById(id);
    const ticketCount = parseInt(ticketInput.value);
    let newTicketCount = 0;
    if (isIncrease == true) {
        newTicketCount = ticketCount + 1;
    }
    if (isIncrease == false && ticketCount > 0) {
        newTicketCount = ticketCount - 1;
    }
    ticketInput.value = newTicketCount;
    let subtotal = getSubtotal();
    document.getElementById('subtotal').innerText = subtotal;
    let vat = subtotal * 0.1;
    document.getElementById('vat').innerText = vat;
    const grandTotal = subtotal + vat;
    document.getElementById('total').innerText = grandTotal;
}


// Subtotal Calculate //
function getSubtotal() {
    const firstClassCount = getInputValue('first-class-count');
    const economyCount = getInputValue('economy-count');
    const subtotalCalculate = firstClassCount * 150 + economyCount * 100;
    const subtotal = document.getElementById('subtotal').innerText = subtotalCalculate;
    return subtotal;
}


// Get Input Value //
function getInputValue(id) {
    const inputValue = document.getElementById(id);
    const newInputValue = parseInt(inputValue.value);
    return newInputValue;
}


// Function For Booking Button //
function bookingBtn() {
    document.getElementById('first-page').style.display = "none";
    document.getElementById('second-page').style.display = "block";
    const firstClassTickets = getInputValue('first-class-count');
    const economyTickets = getInputValue('economy-count');
    const totalTickets = firstClassTickets + economyTickets;
    document.getElementById('total-ticket').innerText = totalTickets;
    const totalPrice = document.getElementById('total').innerText;
    document.getElementById('total-price').innerText = totalPrice;
}