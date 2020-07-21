var board = [];
var score = 0;
var hasConflicted = [];
// 是否产生碰撞

$(document).ready(function() {
    newgame();
});


function newgame() {
    //初始化棋盘格
    init();
    //在随机两个格子生成数字
    generateOneNumber();
    generateOneNumber();

}

function init() {
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            var conCell = $("#con-cell-" + i + "-" + j);
            conCell.css('top', getPosTop(i, j));
            conCell.css('left', getPosLeft(i, j));
        }

    for (var i = 0; i < 4; i++) {
        board[i] = [];
        hasConflicted[i] = [];
        for (var j = 0; j < 4; j++) {
            board[i][j] = 0;
            hasConflicted[i][j] = false;
        }
    }
    updateBoardView();
    score = 0;

}

function updateBoardView() {
    $(".number-cell").remove();
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            $("#container").append('<div class="number-cell" id="number-cell-' + i + '-' + j + '"></div>');
            var theNumberCell = $('#number-cell-' + i + '-' + j);

            if (board[i][j] == 0) {
                theNumberCell.css('width', '0px');
                theNumberCell.css('height', '0px');
                theNumberCell.css('top', getPosTop(i, j) + 50);
                theNumberCell.css('left', getPosLeft(i, j) + 50);
            } else {
                theNumberCell.css('width', '100px');
                theNumberCell.css('height', '100px');
                theNumberCell.css('top', getPosTop(i, j));
                theNumberCell.css('left', getPosLeft(i, j));
                theNumberCell.css('background-color', getNumberBackgroundColor(board[i][j]));
                theNumberCell.css('color', getNumberColor(board[i][j]));
                theNumberCell.text(board[i][j]);
            }

            hasConflicted[i][j] = false;
        }
}

function generateOneNumber() {
    if (nospace(board)) {
        return false;
    }
    var randx = parseInt(Math.floor(Math.random() * 4));
    var randy = parseInt(Math.floor(Math.random() * 4));
    var times = 0;
    while (times < 50) {
        if (board[randx][randy] == 0) {
            break;
        }
        randx = parseInt(Math.floor(Math.random() * 4));
        randy = parseInt(Math.floor(Math.random() * 4));
        times++;
        // 随机一个位置
    }
    if (times == 50) {
        for (var i = 0; i < 4; i++) {
            for (var j = 0; j < 4; j++) {
                if (board[i][j] == 0) {
                    randx = i;
                    randy = j;
                }
            }
        }
    }
    var randNumber = Math.random() < 0.5 ? 2 : 4;
    // 随机一个数字
    board[randx][randy] = randNumber;
    showNumberWithAnimation(randx, randy, randNumber);
    // 显示一个数字

}
$(document).keydown(function(event) {
    switch (event.keyCode) {
        case 37: //left
            if (moveLeft()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            };
            break;
        case 38: //up
            if (moveUp()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            };
            break;
        case 39: //right
            if (moveRight()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            };
            break;
        case 40: //down
            if (moveDown()) {
                setTimeout("generateOneNumber()", 210);
                setTimeout("isGameOver()", 300);
            };
            break;
        default: //默认
            break;

    }
})

function isGameOver() {
    if (nospace(board) && nomove(board)) {
        alert('游戏结束，本次分数为' + score + '分');

    }
}

function moveLeft() {
    if (!canMoveLeft(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++)
        for (var j = 1; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < j; k++) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, k, j, board)) {
                        // move
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, k, j, board) && !hasConflicted[i][k]) {
                        // move
                        showMoveAnimation(i, j, i, k);
                        // add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);

                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()", 200);
    return true;

}

function moveRight() {
    if (!canMoveRight(board)) {
        return false;
    }
    for (var i = 0; i < 4; i++)
        for (var j = 0; j < 3; j++) {
            if (board[i][j] != 0) {
                for (var k = 3; k > j; k--) {
                    if (board[i][k] == 0 && noBlockHorizontal(i, j, k, board)) {
                        // move
                        showMoveAnimation(i, j, i, k);
                        board[i][k] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[i][k] == board[i][j] && noBlockHorizontal(i, j, k, board) && !hasConflicted[i][k]) {
                        // move
                        showMoveAnimation(i, j, i, k);
                        // add
                        board[i][k] += board[i][j];
                        board[i][j] = 0;
                        score += board[i][k];
                        updateScore(score);

                        hasConflicted[i][k] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()", 200);
    return true;

}

function moveUp() {
    if (!canMoveUp(board)) {
        return false;
    }
    for (var i = 1; i < 4; i++)
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 0; k < i; k++) {
                    if (board[k][j] == 0 && noBlockVertical(j, k, i, board)) {
                        // move
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[k][j] == board[i][j] && noBlockVertical(j, k, i, board) && !hasConflicted[k][j]) {
                        // move
                        showMoveAnimation(i, j, k, j);
                        // add
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);

                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()", 200);
    return true;

}

function moveDown() {
    if (!canMoveDown(board)) {
        return false;
    }
    for (var i = 0; i < 3; i++)
        for (var j = 0; j < 4; j++) {
            if (board[i][j] != 0) {
                for (var k = 3; k > i; k--) {
                    if (board[k][j] == 0 && noBlockVertical(j, i, k, board)) {
                        // move
                        showMoveAnimation(i, j, k, j);
                        board[k][j] = board[i][j];
                        board[i][j] = 0;

                        continue;
                    } else if (board[k][j] == board[i][j] && noBlockVertical(j, i, k, board) && !hasConflicted[k][j]) {
                        // move
                        showMoveAnimation(i, j, k, j);
                        // add
                        board[k][j] += board[i][j];
                        board[i][j] = 0;
                        score += board[k][j];
                        updateScore(score);

                        hasConflicted[k][j] = true;
                        continue;
                    }
                }
            }
        }

    setTimeout("updateBoardView()", 200);
    return true;

}