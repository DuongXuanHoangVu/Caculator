const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btns = $$('.btn')
const result = $('#result')

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        result.innerHTML += btn.value
    })
});

function clean () {
    result.innerHTML = ''
}

function undo () {
    let res = result.innerHTML
    result.innerHTML = res.slice(0, res.length - 1)
}

function equal () {
    let res = result.innerHTML
    let output = eval(res)
    result.innerHTML = output
}
