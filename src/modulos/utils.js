function sum(a,b) {
    return a + b;
}

// named export
// ter varios exports dentro de um msm arquivo
// so pode chama com o msm nome
// import precisa das chaves {sub}
export function sub(a, b) {
    return a - b;
}

function mult(a, b) {
    return a * b;
}

function div(a, b) {
    return a / b;
}

const PI = 3.14;

export {mult, div, PI};

// metodo principal
// só pdoe ter um defaut por arquivo
// importar com qq nome
// n precisa utilizar as chaves
export default sum;
