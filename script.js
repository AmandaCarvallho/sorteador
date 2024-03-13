function sortear(){
    const min = document.querySelector("input#min").value
    const max = document.querySelector("input#max").value
    const minCeiled = Math.ceil(min)
    const maxFloored = Math.floor(max)
    const resultado = Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled)
    alert(resultado)
    if (max == 0 || min == 0){
        alert("Por favor, digite um valor válido!")
    } else if(max <= min){
        alert("Por favor, digitar um valor maior que o valor mínimo")
    } else{
        alert("Tudo ok")
    }

}