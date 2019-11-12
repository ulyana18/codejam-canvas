import './style.css';
import * as matrix32 from './assets/data/32x32.json'; 
import * as matrix4 from './assets/data/4x4.json'; 

let file = document.querySelectorAll('.files-panel__file');
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");
let jsonData1 = matrix4.default; 
let jsonData2 = matrix32.default;

for(let i = 0; i < jsonData2.length; i++) {
    for(let j = 0; j < jsonData2[0].length; j++) {
        jsonData2[i][j] = RGBAToHex(jsonData2[i][j][0], jsonData2[i][j][1], jsonData2[i][j][2]);
    }
}

[].forEach.call(file, function(elem) {
    elem.onclick = function() {

        for(let elem of file) {
            elem.style.background = '#ffffff';
        }

        if(this.innerText === 'image.png') {
            drawImage();
            document.querySelector('.file-3').style.background = '#e6e6e6';
        }
        if(this.innerText === '4x4.json') {
            drawJSON(jsonData1);
            document.querySelector('.file-1').style.background = '#e6e6e6';
        }
        if(this.innerText === '32x32.json') {
            drawJSON(jsonData2);
            document.querySelector('.file-2').style.background = '#e6e6e6';
        }

    }
});

function drawImage() {
    let img = new Image();

    img.onload = function() {
        context.drawImage(img, 0, 0, 512, 512);
    };
    img.src = "./assets/data/image.png";
}

function drawJSON(data) {
    let rowLength = data.length;
    let columnLength = data[0].length;

    for(let i = 0; i < rowLength; i++) {
        for(let j = 0; j < columnLength; j++) {
            context.fillStyle = '#' + data[i][j];
            context.fillRect(i * (512 / rowLength), j * (512 / columnLength), 512 / rowLength, 512 / columnLength);
        }
    }
}

function RGBAToHex(r,g,b) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;

    return r + g + b;
}