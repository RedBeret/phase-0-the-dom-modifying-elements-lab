//no longer has DOM node 'main#main' so Remove the main node with the ID 'main'
document.getElementById('main').remove();

// Create a new h1 element called newHeader
const newHeader = document.createElement('h1');

// Assign the ID 'victory' to the newHeader
newHeader.id = 'victory';

// Set the text content of newHeader. the 'newHeader' variable that points to the <h1> node with an id of 'victory' has the text "YOUR-NAME is the champion" (with your name in place of YOUR-NAME) inside it
newHeader.textContent = "Steven is the champion";

// Append the newHeader to the body
document.body.append(newHeader);
