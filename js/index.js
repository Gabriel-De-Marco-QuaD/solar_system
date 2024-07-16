const triggers = document.querySelectorAll('.trigger'); //seleciona todos elementos com classe "trigger"

//recupera o id do target para cada trigger associado pelo "data-target"
triggers.forEach(trigger => {
    const targetId = trigger.getAttribute('data-target');
    const target = document.getElementById(targetId);

    //adiciona um evento ouvinte de clique a cada "trigger" que adiciona a classe "ativo" ao "target" correspondente
    trigger.addEventListener('click', () => {
        target.classList.add('ativo');
        target.scrollIntoView({ behavior: 'smooth', block: 'nearest'});
    });
});

//adiciona um evento ouvinte de clique no documento que remove a classe "ativo" de todos os "target" se o clique não for no "trigger" ou dentro do "target"
document.addEventListener('click', (event) => {

    triggers.forEach(trigger => {
        const targetId = trigger.getAttribute('data-target');
        const target = document.getElementById(targetId);
    
        // Verifica se o clique não foi no trigger e nem dentro do target
        if (!trigger.contains(event.target) && !target.contains(event.target)) {
            target.classList.remove('ativo');
        }
    });
});

function goBefore(){
    window.scrollBy(0,-300);
}

function goAfter(){
    window.scrollBy(0,300);
}