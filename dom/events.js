const outerDiv = document.querySelector('.outer');
const innerDiv = document.querySelector('.inner');

outerDiv.addEventListener('click', function(event) {
    console.log('Outer Div Clicked');
    event.stopPropagation();
});

innerDiv.addEventListener('click', function(event) {
    console.log('Inner Div clicked');
    event.stopPropagation();
});