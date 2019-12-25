let canvas = document.getElementById('canvas');
let context = canvas.getContext('2d');

context.beginPath();
context.fillStyle = '#384240'
context.moveTo(0, 0);
context.lineTo(0, 1400);
context.lineTo(1000, 1700);
context.lineTo(2000, 1400);
context.lineTo(2000, 0);
context.lineTo(1000, 300);
context.fill();
context.closePath();
