
let A = [];
let aux = 0;
let K = 0;
k = prompt("Informe a quantidade de rotações: ");
function rotacionar(){
    for(let x = 0; x < K; x++){
        aux = A [A.length-1]
        A.pop();
        A.unshift(aux);
    }
}
