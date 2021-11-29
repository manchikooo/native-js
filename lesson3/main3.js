const sml = document.getElementById('small')
// const mdm = document.getElementById('medium')
const big = document.getElementById('big')
const link = document.getElementById('link')


const xxx = document.getElementById('xxx')

function onClickHandler(event) {
    // event.stopPropagation() // предотвращение всплытия (только то, по чему кликнули)
    event.preventDefault() // предовтращает переход по ссылке
    console.dir(`${event.currentTarget.tagName}`)
    // console.log(event)
}

link.addEventListener('click', onClickHandler)

// xxx.onclick = onClickHandler
// sml.onclick = onClickHandler
// mdm.onclick = onClickHandler
// big.onclick = onClickHandler

// sml.addEventListener('click', onClickHandler, true) // true для изменения с всплытия на погружение
// sml.addEventListener('click', () => alert())
// mdm.addEventListener('click', onClickHandler, true)
// big.addEventListener('click', onClickHandler, true)
// big.removeEventListener('click', onClickHandler, true)

big.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        console.log(e.target.id)
    } else {
        console.log('тыкай по кнопкам')
    }
})

// document.body.addEventListener('click', (e) => {
//     if (e.target.tagName === 'BUTTON') {
//         console.log(e.target.id)
//     } else {
//         console.log('тыкай по кнопкам')
//     }
// })