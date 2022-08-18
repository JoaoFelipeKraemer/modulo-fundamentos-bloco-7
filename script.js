// const month = 12;
const numberOfDays = (month) => {

    switch (parseInt(month)) {
        case 1:
            return (31);
        case 2:
            return (28);
        case 3:
            return (31);
        case 4:
            return (30);
        case 5:
            return (31);
        case 6:
            return (30);
        case 7: ;
            return (31);
        case 8: ;
            return (31);
        case 9:
            return (30);
        case 10:
            return (31);
        case 11:
            return (30);
        case 12:
            return (31);
        default:
            throw new Error(`Mês inválido`);

    }
}

const textParagrapher = () => {
    try {
        const month = document.getElementById('month').value;
        const result = document.getElementById('result');

        result.innerText = `O mês ${month} tem ${numberOfDays(month)} dias`;

    } catch (error) {
        console.log(error.message);
        result.innerText = error.message;
    } finally {
        document.getElementById('month').value = '';
    }
}

window.onload = () => {
    const button = document.getElementById('button');

    button.addEventListener('click', textParagrapher);  //2 parametros 1 ação 2 o q vai fazer
}

