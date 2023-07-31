// JavaScript code to change the shadow color and position randomly over time
var shadowImage = document.getElementById('invitationImage');

function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function updateShadow() {
    var offsetX = getRandomNumber(-5, 5); // Adjust the range of offsetX (horizontal movement)
    var offsetY = getRandomNumber(-5, 5); // Adjust the range of offsetY (vertical movement)

    // Generate random RGB values for the shadow color
    var redValue = getRandomNumber(0, 255);
    var greenValue = getRandomNumber(0, 255);
    var blueValue = getRandomNumber(0, 255);

    // Random opacity between 0.1 and 0.8 (adjust as needed)
    var opacity = getRandomNumber(10, 80) / 100;

    // Generate the shadow color with random RGB and opacity
    var shadowColor = 'rgba(' + redValue + ', ' + greenValue + ', ' + blueValue + ', ' + opacity + ')';

    // Update the image styles
    shadowImage.style.boxShadow = offsetX + 'px ' + offsetY + 'px 8px ' + shadowColor;
}

// Call the updateShadow function every 1 second (1000 milliseconds)
setInterval(updateShadow, 1000);


// JavaScript code to print the image
var printButton = document.getElementById('printButton');
var imageToPrint = document.getElementById('invitationImage');

printButton.addEventListener('click', function() {
    printImage();
});

function printImage() {
    var newWindow = window.open('', '_blank');
    newWindow.document.write('<html><head><title>Print Image</title></head><body>');
    newWindow.document.write('<style>body { margin: 0; padding: 0; } @page { size: A4; margin: 0; }</style>');
    newWindow.document.write('</head><body>');
    newWindow.document.write('<img src="' + imageToPrint.src + '" style="max-width: 100%; height: auto;">');
    newWindow.document.write('</body></html>');
    newWindow.document.close();
    newWindow.onload = function() {
        newWindow.print();
        newWindow.close();
    };
}

var countDownDate = new Date("Aug 11, 2023 18:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the count down date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="demo"
    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "EXPIRED";
    }
}, 1000);