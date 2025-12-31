document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your booking request was received.');

  if (confirm('Proceed to WhatsApp booking?')) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const room = document.getElementById('roomType').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;

    const message = `Hi! I’d like to book a stay:\nName: ${name}\nPhone: ${phone}\nRoom: ${room}\nCheck‑in: ${checkin}\nCheck‑out: ${checkout}`;
    const url = `https://wa.me/2349018289732?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
});