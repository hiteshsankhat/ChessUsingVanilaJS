function boxClickEvent(event) {
    console.log(event.target.id);
}

function drawChessboard() {
    var chessboard = document.getElementById('chessboard');
    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= 8; j++) {
            var box = document.createElement('div');
            if ((i % 2 === 0 && j % 2 !== 0) || (i % 2 !== 0 && j % 2 === 0)) {
                box.className = 'box float-left'
            } else {
                box.className = 'box float-left black-color-bg'
            }
            box.id = 'box-' + i + '-' + j
            box.onclick = boxClickEvent
            chessboard.appendChild(box)
        }
        var box = document.createElement('div');
        box.className = 'clear-float'
        chessboard.appendChild(box)
    }
}

window.onload = drawChessboard;
