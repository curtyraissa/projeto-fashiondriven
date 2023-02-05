// let nome = prompt("Qual é o seu nome?")

const objProp = {
    model: null,
    neck: null,
    material: null,
    owner: null,
    image: null
  }
  
  function postURL(){
    const promise = axios.post("https://mock-api.driven.com.br/api/v4/shirts-api/shirts", objProp)
  
    promise.then((resp) => {
      alert("Encomenda realizada!")
      console.log(resp.status)
    })
    promise.catch((err) => {
      alert("Ops, não conseguimos processar sua encomenda!")
      console.log(err.status)
    })
  }
  
  function selecionarModelo(modelo) {
    const selecionado = document.querySelector("#modelo .selected");
    if (selecionado !== null) {
      selecionado.classList.remove("selected");
    }
    modelo.classList.add("selected");
    objProp.model = modelo.id
    activeButton();
  }
  
  function selecionarGola(gola) {
    const selecionado = document.querySelector("#gola .selected");
    if (selecionado !== null) {
      selecionado.classList.remove("selected");
    }
    gola.classList.add("selected");
    objProp.neck = gola.id
    activeButton();
  }
  
  function selecionarTecido(tecido) {
    const selecionado = document.querySelector("#tecido .selected");
    if (selecionado !== null) {
      selecionado.classList.remove("selected");
    }
    tecido.classList.add("selected");
    objProp.material = tecido.id
    activeButton();
  }
  
  const button = document.getElementById("button");
  function link() {
    const input = document.querySelector("input");
    button.addEventListener("click", () => { });
  }
  
  // alert("confirmando a encomenda")
  
  // console.log(input)
  // console.log(button)
  
  function activeButton() {
    let quantidade = document.getElementsByClassName("selected").length;
    if (quantidade === 3 && link) {
      document.querySelector("button").classList.add("btn-selected");
      document.querySelector("button").removeAttribute("disabled");
    }
  }
  
  
  
  //footer
  const ultimosPedidos = document.querySelector(".footer-ul");
  
  function getURL() {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v4/shirts-api/shirts"
    );
    promise.then((resp) => {
      for (let i = 0; i < 10; i++) {
        ultimosPedidos.innerHTML += `<li class="footer-li" onclick="confirmar(this)">
        <img class="footer-img" src="${resp.data[i].image}" alt="Blusa" />
        <h2>Criador: ${resp.data[i].owner}</h2>
        </li>`;
      }
    });
    promise.catch((err) => {
      console.log(err);
    });
  } getURL();
  
  function confirmar() {
    let resultado = confirm("Deseja fazer esse pedido?")
    if (resultado == true) {
      //realizer o post
    }
  }