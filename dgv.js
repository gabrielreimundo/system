const form=document.getElementById('form_p')
const dgvDados=document.getElementById('dgvDados')

//enviando
form.addEventListener('submit',(e)=>{
    e.preventDefault();
    var nome=document.getElementById('inp_nome').value;
    var custo=document.getElementById('inp_custo').value;
    var preço=document.getElementById('inp_preço').value;
    var Qtd_estoque=document.getElementById('inp_Qestoque').value;
    var codigo=document.getElementById('inp_codigo').value;

    fetch('http://localhost:8081/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome: nome, custo: custo, preço: preço, Qtd_estoque: Qtd_estoque, codigo: codigo}),
      })
      .then(response => response.json())
      .then(data => console.log(data))
      .catch((error) => {
        console.error('Erro:', error);
      });
    
})

//recebendo
fetch('http://localhost:8081/dados')
.then(res=>res.json())
.then(res=>{
  res.forEach(el => {
    const dgvLinha=document.createElement("div");

    //dgvDados.innerHTML="";

    dgvLinha.setAttribute("class","dgvLinha");

    const c1=document.createElement("div");
    c1.setAttribute("class","c1");
    c1.innerHTML=el.id;
    dgvLinha.appendChild(c1)

    const c2=document.createElement("div");
    c2.setAttribute("class","c2");
    c2.innerHTML=el.nome;
    dgvLinha.appendChild(c2)
              
    const c3=document.createElement("div");
    c3.setAttribute("class","c3");
    c3.innerHTML=el.custo;
    dgvLinha.appendChild(c3)

    const c4=document.createElement("div");
    c4.setAttribute("class","c4");
    c4.innerHTML=el.preço;
    dgvLinha.appendChild(c4)

    const c5=document.createElement("div");
    c5.setAttribute("class","c5");
    c5.innerHTML=el.Qtd_estoque;
    dgvLinha.appendChild(c5)

    const c6=document.createElement("div");
    c6.setAttribute("class","c6");
    c6.innerHTML=el.codigo;
    dgvLinha.appendChild(c6)

    const c7=document.createElement("div");
    c7.setAttribute("class","c7");
    // c5.innerHTML="DEV";
    dgvLinha.appendChild(c7)

    const imgDelete=document.createElement("img");
    imgDelete.setAttribute("class","dgvIcone");
    imgDelete.setAttribute("src","delete_FILL0_wght400_GRAD0_opsz24.svg")
    c7.appendChild(imgDelete)

    const imgEditar=document.createElement("img");
    imgEditar.setAttribute("class","dgvIcone");
    imgEditar.setAttribute("src","edit_FILL0_wght400_GRAD0_opsz24.svg")
    c7.appendChild(imgEditar)

    dgvDados.appendChild(dgvLinha)
  });
  console.log(res)
})

document.querySelector("#btn_enviar").addEventListener("click", function() {
  location.reload();
});