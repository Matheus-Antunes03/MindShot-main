localStorage.setItem('lifes', 5);
localStorage.setItem('points', 0);
let vidas = localStorage.getItem('lifes');
let pontos = localStorage.getItem('points');
document.getElementById('lifesValue').textContent = vidas;
document.getElementById('pointsValue').textContent = pontos;
document.getElementById("escolher").onclick = function() {
    let numero = document.getElementById("campo").value;
    let resposta = Math.floor(Math.random() * 5) + 1;
    if(numero == resposta) {
        let ponto = localStorage.getItem('points');
        ponto ++;
        localStorage.setItem('points', ponto);
        window.location.href = "../html/segunda.html";
    } else {
        let tiro = Math.floor(Math.random() * 2);
        if(tiro == 1){
            window.location.href = "../html/errou_tiro1.html"
            let vida = localStorage.getItem('lifes');
            vida --;
            localStorage.setItem('lifes', vida);
            if (vida == 0) {
                window.location.href = "../html/derrota.html"
            }
        } else{
            window.location.href = "../html/errou_sem_tiro1.html"
        }
    }
}