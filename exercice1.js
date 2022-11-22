document.getElementById("aSupprimer").style.display = 'none';

let monDiv = document.createElement('div');
document.getElementById('viewport').appendChild(monDiv);

let monDivTwo = document.createElement('div');
document.getElementById('viewport').appendChild(monDivTwo);

monDiv.innerHTML = "Ce div a été ajouté en utilisant javascript"
monDivTwo.style.backgroundColor = "red";
monDivTwo.style.width = "100px";
monDivTwo.style.height = "100px";

