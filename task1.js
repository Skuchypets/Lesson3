let i

function number(arq) {
    if (i == 0) {
        return 'ето ноль'
    } else if ((i % 2) == 0) {
        return 'четное число'
    } else if ((i % 2) == 1) {
        return 'нечетное число'
    } 
}

for (i = 0; i <= 10; i++) {
    console.log(i + ' - ' + number(i))
}