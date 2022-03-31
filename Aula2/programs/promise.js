// index

const funcaoQueDemora = () => new Promise(
    (res,rej) => {
        setTimeout(() => res(), 5000);
    }
);

const funcaoQueDemora2 = () => new Promise(
    (res,rej) => {
        setTimeout(() => rej(), 5000);
    }
);

const meuCallBack = () => {
    console.log('processamento terminou');
}


// demora 5
funcaoQueDemora()
    .then(() => console.log('1 deu certo'))
    .catch(() => console.error('1 deu errado'));
funcaoQueDemora2()
    .then(() => console.log('2 deu certo'))
    .catch(() => console.error('2 deu errado'));


// demora 10
funcaoQueDemora()
    .then(() => {
        console.log('1 deu certo')
        
        funcaoQueDemora2()
            .then(() => console.log('2 deu certo'))
            .catch(() => console.error('2 deu errado'));
    })
    .catch(() => console.error('1 deu errado'));
