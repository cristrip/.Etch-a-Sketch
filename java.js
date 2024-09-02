function but_Run(){
    var userValue = prompt("Please tell us how many squares");
    // if the user is not entering a value is receiving a message
    if (userValue === ""){
        alert("You have to enter something")
        
    }
    else if (userValue != ""){
        // this is clearing the previous choice
        const element = document.getElementById("main");
        element.remove();
        // the function to make the grid
        function makeGrid(){
            const container = document.createElement("div");
            container.id = "main";
            container.className = "container";
            document.body.appendChild(container);
            // is taking the value from the user
            for (i=0; i<userValue; i++) {
                const main = document.getElementById('main');
                const gridRow = document.createElement("div");
                gridRow.className = "gridRow";
                gridRow.id = "gridRow" + i;
                main.append(gridRow);
                for (j=0; j<userValue; j++) {
                const newGridrow = document.getElementById('gridRow'+i);
                const cell = document.createElement("div");
                cell.className = "cell";
                
                var randomColors = ['red','blue','green','yellow','cyan','orange'];
                var divs = document.getElementsByClassName("cell");
                
                function generateRandomColors() {
                    var i;
                    for (i = 0; i < divs.length; i++) {
                        var newColor = Math.floor(Math.random()*randomColors.length)
                        divs[i].style.background = randomColors[newColor];
                }
                }
                generateRandomColors();
                var randomColors = ['red','blue','green','yellow','cyan','orange'];
                var divs = document.getElementsByClassName("cell:hover");
                
                function generateRandomColors() {
                    var i;
                    for (i = 0; i < divs.length; i++) {
                        var newColor = Math.floor(Math.random()*randomColors.length)
                        divs[i].style.background = randomColors[newColor];
                }
                }
                generateRandomColors();
                

                newGridrow.append(cell);
                }
            
            }
            }
            makeGrid()
            }
            let newColor = document.querySelectorAll(".cell");
            for (const color of newColor) {
              color.addEventListener("mouseover", () => {
                color.style.backgroundColor = " black";
              });
            }
}



