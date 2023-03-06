const grids = document.getElementById("grids");    

function gridsize()
{
    let x = prompt ("Enter Number");
    let y = prompt ("Enter Number");

 
    function makeRows(rows, cols)
    {
        grids.style.setProperty('--grid-rows', rows);
        grids.style.setProperty('--grid-cols', cols);
            for ( c = 0; c < (rows * cols); c++)
            {
                let cell = document.createElement("div");
                grids.appendChild(cell).className = "grid-item";
            };
    };
makeRows(x, y);
}