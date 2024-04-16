let chave = "cebcd482eda57fa9a6714c1c2ba91885";

function colocarNaTela(dados) {
    console.log(dados);

    document.querySelector(".cidade").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".icone").src = "https://openweathermap.org/img/wn/" + dados.weather[0].icon + ".png";
    document.querySelector(".descricao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%";
    document.querySelector('.input-cidade').addEventListener('keypress', function (e) {
        if (e.key === 'Enter') {
            cliqueiNoBotao();
        }
    });
}

async function buscarCidade(cidade) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${chave}&units=metric&lang=pt`;
    let dados = await fetch(url).then(resposta => resposta.json());
    colocarNaTela(dados);
}

function cliqueiNoBotao() {
    let cidade = document.querySelector(".input-cidade").value;
    buscarCidade(cidade);
}