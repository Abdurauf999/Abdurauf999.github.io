let people = Number(prompt('Введите имя'))
let work = Number(prompt('Сколько часов работали'))
let money = Number(prompt('$'))

let ost = people % work
let kol = Math.floor(work * people * money)

alert('Вы получили;' + kol + 'Остаток;' + ost)