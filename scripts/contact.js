// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.

const contactPage = document.getElementById("contact-page");

document.getElementById("submit-button").addEventListener("click", function() {
    contactPage.lastElementChild.remove();
    
    const contentCreator = document.createElement("p");
    contentCreator.id = 'paragraph';
    contentCreator.appendChild(document.createTextNode('Thank you for your message'));
    contentCreator.style.fontSize = '24px';
    contactPage.appendChild(contentCreator);
    
    contactPage.firstElementChild.remove();
});


// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

