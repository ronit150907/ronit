// script.js
function changeColor() {
    // Array of colors to choose from
    const colors = ['#FFB6C1', '#FF6347', '#ADD8E6', '#98FB98', '#D3D3D3'];
    // Randomly select a color
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    // Change the background color of the body
    document.body.style.backgroundColor = randomColor;
}
