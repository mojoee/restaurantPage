function removeAllChildren(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

function Menu() {
    var content = document.getElementById("content");
    removeAllChildren(content);
    var heading = document.createElement("h1");
    heading.textContent = "Mojoee's German Delicacies";
    content.appendChild(heading);

    var para = document.createElement("p");
    para.textContent = "Welcome to Mojoee's German Delicacies! We offer a variety of German dishes.";
    content.appendChild(para);

    var menu = document.createElement("ul");
    content.appendChild(menu);

    // Menu items and prices
    var items = [
        { name: "Schnitzel", price: "$12.99" },
        { name: "Kartoffelsalat mit Wuerstchen", price: "$8.99" },
        { name: "Javasalat", price: "$10.49" }
    ];

    // Loop through the menu items array and create list items for each
    items.forEach(function(item) {
        var menuItem = document.createElement("li");
        menuItem.textContent = item.name + " - " + item.price;
        menu.appendChild(menuItem);
    });
}

export default Menu;