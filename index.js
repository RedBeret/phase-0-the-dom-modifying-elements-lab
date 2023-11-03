const element = document.createElement("div");
// Let's append element to body to start:
document.body.append(element);
// create an unordered list:
const ul = document.createElement("ul");
// To populate our unordered list, we'll use a for loop to 
// create three li's, give them some content, and append them to the ul:
for (let i = 0; i < 3; i++) {
  const li = document.createElement("li");
  li.textContent = (i + 1).toString();
  ul.append(li);
}
// Finally, we'll append the ul to the div we created:
element.append(ul);

const main = document.getElementById("main");
main.innerHTML =
  "<h1>Poodles!</h1><h3>An Essay into the Pom-Pom as Aesthetic Reconfiguration of the Other from a post-Frankfurt School Appropriationist Perspective</h3><p><em>By: Byron Q. Poodle, Esq., BA.</em></p>";



element.textContent = "You've changed what's on the screen!";
element.style.fontSize = "24px";
element.style.marginLeft = "30px";
element.style.lineHeight = 2;

element.className = "pet-listing dog";

