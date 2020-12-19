var numberOf__right = 39, numberOf__left = 37, numberOf__up = 38, numberOf__down = 40; // Valores dos arrow keys
//      direita         |     esquerda       |       cima       |      baixo        //
let canvas = document.getElementById("snake");  // Criar elemento que irá rodar o jogo
let context = canvas.getContext("2d");          // 2d (。_。)      //
let box = 32;                                   // Tamanho da box  //
let food = {                                    // Comida 🍉       //
    x: Math.floor(Math.random() * 15 +1) * box, // Carrega em um lugar aleatório
    y: Math.floor(Math.random() * 15 +1) * box  // +1x
}
let snake = [];                                 // Cobrinha 🐍 //
snake[0] = {
    x: 8 * box,
    y: 8 * box
}
let direction = "right";                        // Direção Inicial → //



function drawBackground(){                      // FUNDO function
    context.fillStyle = `#ffa033`;              // É a cor ¯\(°_o)/¯ 🟧
    context.fillRect(0, 0, 16*box, 16*box);     // Desenha o retângulo usando x e y e a largura e altura setadas
}
function drawFood() {                           // COMIDA function   🍉
    context.fillStyle = `#ff3900`;              // É a COR! eu em... 🟥
    context.fillRect(food.x, food.y, box, box); // Desenha a comida
}
function drawSnake(){                           // COBRINHA function 🐍
    for (let i = 0; i < snake.length; i++) {
        context.fillStyle = `#ff7300`;          // É A COR!!! 🟧 Quer que eu repita +3x ?
        context.fillRect(snake[i].x, snake[i].y, box, box); // Adivinha ae (¬_¬")
    }
}



document.addEventListener("keydown", update);
function update(event) {
    // Esquerda ←   ⏪
    if (event.keyCode === numberOf__left  && direction != "right") direction = "left";
    // Direita →    ⏩
    if (event.keyCode === numberOf__right && direction != "left")  direction = "right";
    // Cima ↑       🔼
    if (event.keyCode === numberOf__up    && direction != "down")  direction = "up";
    // Baixo ↓      🔽
    if (event.keyCode === numberOf__down  && direction != "up")    direction = "down";
}
function startGame() {
    if (snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if (snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if (snake[0].y < 0 && direction == "up") snake[0].y = 16 * box;
    if (snake[0].y > 15 * box && direction == "down") snake[0].y = 0;

    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x == snake[i].x && snake[0].y == snake[i].y) { // A cabeça se chocou com o corpo?
            clearInterval(game);                // Parou o jogo //
            alert("Game Over ～(　TロT)σ")
        }
    }

    drawBackground();
    drawFood();
    drawSnake();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "left")     snakeX -= box;
    if(direction == "right")    snakeX += box;
    if(direction == "up")       snakeY -= box;
    if(direction == "down")     snakeY += box;

    if (snakeX != food.x || snakeY != food.y){
        snake.pop();                            // Remove o ultimo elemento
    }else{
        // Comida carrega em outro lugar aleatório
        food.x = Math.floor(Math.random() * 15 +1) * box;
        food.y = Math.floor(Math.random() * 15 +1) * box;
    }

    let newHead = {
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);                     // Add para o primeiro elemento
}



let game = setInterval(startGame, 100);         // INICIA JOGO //