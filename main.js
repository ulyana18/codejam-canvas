import * as matrix32 from './assets/data/32x32.json'; 
import * as matrix4 from './assets/data/4x4.json'; 

console.log(matrix32.default[0][1]);

let file = document.querySelectorAll('.files-panel__file');
let canvas = document.getElementById("canvas");
let context = canvas.getContext("2d");

[].forEach.call(file, function(elem) {
    elem.onclick = function() {
    
        if(this.innerText === 'image.png') {
            drawImage();
        }
        if(this.innerText === '4x4.json') {
            /*let jsonData = [
                ["00BCD4", "FFEB3B","FFEB3B","00BCD4"],
                ["FFEB3B", "FFC107","FFC107","FFEB3B"],
                ["FFEB3B", "FFC107","FFC107","FFEB3B"],
                ["00BCD4", "FFEB3B","FFEB3B","00BCD4"]
            ];*/
            let jsonData = matrix4.default; 
            drawJSON(jsonData);
        }
        if(this.innerText === '32x32.json') {

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

function RGBAToHex(r,g,b,a) {
    r = r.toString(16);
    g = g.toString(16);
    b = b.toString(16);
    a = Math.round(a * 255).toString(16);
  
    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;
  
    return "#" + r + g + b + a;
  }
/*file.onclick = function() {
    console.log(this.innerText);
}*/


/*file[0].onclick = function() {
    console.log("hiii");
    var img = new Image();

    img.onload = function() {
        context.drawImage(img, 0, 0, 512, 512);
    };
    img.src = "./assets/data/image.png";
}
file[1].onclick = function() {
    console.log("hiii");
    var img = new Image();

    img.onload = function() {
        context.drawImage(img, 0, 0, 512, 512);
    };
    img.src = "./assets/data/image.png";
}
file[2].onclick = function() {
    console.log("hiii");
    var img = new Image();

    img.onload = function() {
        context.drawImage(img, 0, 0, 512, 512);
    };
    img.src = "./assets/data/image.png";
} */