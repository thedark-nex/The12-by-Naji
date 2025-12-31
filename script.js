// Booking Form Logic
document.getElementById('bookingForm').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you! Your booking request was received.');
  if (confirm('Proceed to WhatsApp booking?')) {
    const name = document.getElementById('name').value;
    const phone = document.getElementById('phone').value;
    const room = document.getElementById('roomType').value;
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    const message = `Hi! I’d like to book a stay:\nName: ${name}\nPhone: ${phone}\nRoom: ${room}\nCheck-in: ${checkin}\nCheck-out: ${checkout}`;
    const url = `https://wa.me/2349018289732?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }
});

// Section Background Rotation
const sections = [
  {id:'home', images:['images/bg1.jpg','images/bg2.jpg','images/bg3.jpg'], interval:15000},
  {id:'rooms', images:['images/bg4.jpg'], interval:20000},
  {id:'amenities', images:['images/bg5.jpg','images/bg6.jpg'], interval:20000},
  {id:'gallery', images:['images/bg5.jpg','images/bg6.jpg'], interval:20000},
  {id:'events', images:['images/bg7.jpg','images/bg8.jpg'], interval:15000}
];

sections.forEach(section=>{
  const elem=document.getElementById(section.id);
  if(!elem) return;
  let index=0;
  setInterval(()=>{
    elem.style.backgroundImage=`url('${section.images[index]}')`;
    index=(index+1)%section.images.length;
  },section.interval);
});