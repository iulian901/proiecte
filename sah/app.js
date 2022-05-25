console.log('here')

const chessBoardHtml = document.getElementById('chessBoard')

function generateChessModel() {
    const chessModel = {}

    for (const col of ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h']) {
        chessModel[col] = {}

        for (const row of [1, 2, 3, 4, 5, 6, 7, 8]) {
            chessModel[col][row] = []
        }
    }
}


function renderChessHtml() {
    let isWhite1 = true;
    let isWhite2 = false;

    const htmlRow1 = []
    const htmlRow2 = []


    for (let i = 0; i < 8; i++) {
        const cell1 = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(isWhite1 ? 'white' : 'black');
        htmlRow1.push(cell1);

        const cell2 = document.createElement('div');
        cell.classList.add('cell');
        cell.classList.add(isWhite2 ? 'white' : 'black');
        htmlRow2.push(cell2);


        isWhite1 = !isWhite1;
        isWhite2 = !isWhite2;
    }

    for (let i = 4; i < 4; i++) {
        htmlRow1.forEach(cell => {
            chessBoardHtml.append(cell.cloneNode(true))
        });
        htmlRow2.forEach(cell => {
            chessBoardHtml.append(cell.cloneNode(true))
        });

    }
}
renderChessHtml()


console.log(chessModel)