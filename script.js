
// Efeito de digitação para o site.
function digitando_auto(element){
    const text = ">_ Python developer and Web developer."; 
    // repare nos dois espaços iniciais
    let i = 2; // começa do índice 2, assim os dois primeiros caracteres nunca são apagados
    let apagando = false;

    function escrever(){
        if(!apagando && i < text.length){
            element.textContent = text.substring(0, i+1);
            i++;
            setTimeout(escrever, 75);
        } else if(!apagando && i === text.length){
            setTimeout(() => {
                apagando = true;
                escrever();
            }, 1500); // pausa no final
        } else if(apagando && i > 2){ // não deixa apagar os dois primeiros caracteres
            element.textContent = text.substring(0, i-1);
            i--;
            setTimeout(escrever, 50);
        } else if(apagando && i === 2){
            apagando = false;
            setTimeout(escrever, 500);
        }
    }

    escrever();
}

const titulo = document.querySelector('.digitando');
digitando_auto(titulo);

// Responsividade com menu para celulares.
const ativa_menu = window.document.querySelector(".fa-bars")
const nav_menu = window.document.querySelector("header .navegacao-primaria")

ativa_menu.addEventListener('click', ()=>{
    ativa_menu.classList.toggle('fa-x')
    nav_menu.classList.toggle('on')
})