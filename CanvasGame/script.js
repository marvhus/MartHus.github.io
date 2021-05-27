var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
var height = canvas.height;
var width = canvas.width;
var resolutionX = 20;
var resolutionY = 20;
var stepSizeX = width / resolutionX;
var stepSizeY = height / resolutionY;
var num = 0;
var playerX = 2, playerY = 2;
var colors = [
    "#000000",
    "#ffffff",
    "#ff0000"
]
var map = [
    "####################",
    "#..................#",
    "#..................#",
    "#############......#",
    "#..................#",
    "#..................#",
    "#..................#",
    "#........###########",
    "#..................#",
    "#....####..........#",
    "#.....#............#",
    "#.....#............#",
    "#.....#............#",
    "#.....#########....#",
    "#..........#.......#",
    "#..........#.......#",
    "#..........#.......#",
    "#..................#",
    "#..................#",
    "####################"
]
var offsetX = 0;
var offsetY = 0;
var wall = "#";
var air = "."

function update() {
    for (var x = 0; x < resolutionX; x++)
    {
        for (var y = 0; y < resolutionY; y++)
        {
            if (x == playerX && y == playerY)
                num = 2;
            else if (map[y][x] == wall)
                num = 0;
            else if (map[y][x] == air)
                num = 1;

            ctx.fillStyle = colors[num];
            ctx.fillRect(x * stepSizeX, y * stepSizeY, stepSizeX, stepSizeY);
        }
    }
}

function colissionCheck(x, y)
{
    if (map[y][x] == wall)
        return true;
    else
        return false;
}

function setKeyDownListener()
{
    window.addEventListener("keydown", function() {
        switch (event.key)
        {
            case 'w':
                offsetX = 0;
                offsetY = -1;
                break;
            case 's':
                offsetX = 0;
                offsetY = 1;
                break;
            case 'a':
                offsetX = -1;
                offsetY = 0;
                break;
            case 'd':
                offsetX = 1;
                offsetY = 0;
                break;
        }

        var x = playerX + offsetX;
        var y = playerY + offsetY;

        console.log('\n\n----------')
        console.log('\nCurently at:   x ' + playerX + '   y ' + playerY);
        console.log('\nChecking:   x ' + x + '   y ' + y);
        if (colissionCheck(x, y))
        {
            console.log('\ncolsion detected')
            return;
        }

        playerX += offsetX;
        playerY += offsetY;
        console.log('\nPlayer is now at:   x ' + playerX + '   y ' + playerY);

        offsetX = 0;
        offsetY = 0;

        update();
    });
}

setKeyDownListener();
update();
// Welcome to the end
// これは道です
