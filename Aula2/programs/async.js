// ver na gravação

const conectaComBanco = () => new Promise(
    (res,rej) => {
        setTimeout(() => res(), 5000);
    }
);

const funcaoQueDemora2 = async () => {
    await conectaComBanco();
    console.log('conectado');
    return 1;
};

// demora 10
funcaoQueDemora()
    .then(() => {
        console.log('1 deu certo')
        
        funcaoQueDemora2()
            .then(() => console.log('2 deu certo'))
            .catch(() => console.error('2 deu errado'));
    })
    .catch(() => console.error('1 deu errado'));
