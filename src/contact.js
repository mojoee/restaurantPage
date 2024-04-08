function Contact() {
    var content = document.getElementById("content");
    content.innerHTML = "";
    var heading = document.createElement("h2");
    heading.textContent = "Contact Us";
    content.appendChild(heading);

    var para1 = document.createElement("p");
    para1.textContent = "For reservations and inquiries, please contact us:";
    content.appendChild(para1);

    var para2 = document.createElement("p");
    para2.textContent = "Phone: +123456789";
    content.appendChild(para2);

    var para3 = document.createElement("p");
    para3.textContent = "Email: info@mojoeesgermandelicacies.com";
    content.appendChild(para3);

    var para4 = document.createElement("p");
    para4.textContent = "Address: 123 German Street, Berlin, Germany";
    content.appendChild(para4);
}


export default Contact;
