// document.documentElement // <html>
// document.head // <head>
                // .childNodes // les elements enfants
                // .firstChild
                // .lastChild
                // .parentElement
                // .previousSibling
                // .nextSibling
                // .children // retourne dans un objet
                // .childNodes // returne tous les noeudes dans une array meme les commentaires
                
                
                // .textContent
                // .innerText

                // form:
                // document.formeName
                // document.forms
                // document.formName.inputName
                // document.formName.elements
                // document.querySelector("")
                // document.querySelectorAll("")

        // retourne des collections
        // document.cookie
        // document.images
        // document.links
        // document.scripts


// style
// el.className // nom de la class
// el.classList // les classes 
                // .add("val")
                // .remove()
                // .contains("val") // true or false
                // .replace("ex", "new")
                // .toggle("val") // ajoute ou enleve

idd.style.color = "blue"
console.log(getComputedStyle(idd).color);

// for( i of document.body.childNodes){
//     console.log(i)
// }