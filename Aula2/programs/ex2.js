// ex2
// 3 funções que demoram e fazer uma apos a outra (then catch)

const funcao1 = () => new Promise (
    (res, rej) => {
        setTimeout(() => res(), 2000 )
    }
)

const funcao2 = () => new Promise (
    (res, rej) => {
        setTimeout(() => res(), 2000 )
    }
)

const funcao3 = () => new Promise (
    (res, rej) => {
        setTimeout(() => res(), 2000 )
    }
)

funcao1()
    .then(() => {
        console.log('1 OK')

        funcao2()
            .then(() => {
                console.log('2 OK')

                funcao3()
                    .then(() => console.log('3 OK'))
                    .catch(() => console.log('3 erro'))
            })
            .catch(() => console.log('2 erro'))
    })
    .catch(() => console.log('3 erro')).catch(() => console.log('3 erro'));