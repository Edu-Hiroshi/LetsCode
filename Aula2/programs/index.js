// index

const funcaoQueDemora = (callback) => {
    setTimeout(() => callback(), 5000);
}

const funcaoQueDemora2 = (callback) => {
    setTimeout(() => callback(), 5000);
}

const meuCallBack = () => {
    console.log('processamento terminou');
};

// demora 5 seg
//funcaoQueDemora(meuCallback);
//funcaoQueDemora2(meuCallback);

// demora 10 seg
funcaoQueDemora(() => {
    meuCallBack();
    funcaoQueDemora2(meuCallBack);
});


// const minhaPromessa = new Promise();
// minhaPromessa
//    .then(() => console.log('processamento terminou'))
//    .catch(() => console.error('deu ruim'));
