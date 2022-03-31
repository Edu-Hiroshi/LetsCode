// ex

// 3 funções que demoram e fazer uma apos a outra, depois substituir por then catch
// setTimeout ( callback, tempo );

const funcao1 = (callback, t) => {
    setTimeout(() => callback(), t )
}
const funcao2 = (callback, t) => {
    setTimeout(() => callback(), t )
}
const funcao3 = (callback, t) => {
    setTimeout(() => callback(), t )
}
const meuCallback = () => {
    console.log('passou');
}

let tempo = 2000

funcao1(() => {
    meuCallback();
    funcao2(() => {
        meuCallback();
        funcao3(meuCallback, tempo);
    });
});