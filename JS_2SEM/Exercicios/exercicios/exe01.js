var barraProgresso = document.querySelector(".progress");
barraProgresso.style.display = "none";

function animarBarraProgresso() {
    var nome = document.querySelector("#nome").value
    var idade = document.querySelector("#idade").value
    var cidade = document.querySelector("#cidade").value

    if (nome == "" || idade == "" || cidade == "") {
        exibirAlerta("Preencha todos os campos");
        return
    }
    if (idade > 100 || idade <= 0){
        exibirAlerta("Idade Invalida");
        return
    }
 

    var progresso = 0;
    var barra = document.querySelector(".progress-bar");
    barraProgresso.style.display = "block";

    var intervalo = setInterval(function () {
        if (progresso > 100) {
            clearInterval(intervalo);
            barraProgresso.style.display = "none";
            document.querySelector("#mostrar").innerHTML =
                `<div class="alert alert-success fade show" role="alert"> <span>Informações: ${nome}, ${idade} anos, mora em ${cidade}. </span>
                    <button type = "button" class ="btn-close" data-bs-dismiss = "alert"> </    button>
                </div>`
        }
        else {
            progresso++;
            barra.style.width = progresso + "%";
            document.querySelector(".progress-bar").innerHTML = `${progresso}%`;
        }
    }, 50) //percorre o tempo em mil
}

function exibirAlerta(texto)
{
    document.querySelector("#mostrar").innerHTML =
                `<div class="alert alert-danger fade show" role="alert">
                    <div class="d-flex justify-content-between ">
                        <span> ${texto} </span>
                        <button type = "button" class ="btn-close" data-bs-dismiss = "alert"> </button>
                    </div>
                </div>`;

}








