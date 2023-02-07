const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const btns = $$('.btns')
const numBtns = $$('.number')
const result = $('#result')
const caculator = $('.caculator')
const functionBtns = $$('.function-btn')

const add = (a, b) => {
    return a + b
}

const subtract = (a, b) => {
    return a - b
}

const multiply = (a, b) => {
    return a * b
}

const divide = (a, b) => {
    return a / b
}   

const operate = (fun, a, b) => {
    return fun(a, b)
}

const setInputValue = (value) => {
    result.value = value
}

const getInputValue = (value) => {
    return value
}


const handleInputEvent = () => {
    let a = 0
    let inputValue = ''
    numBtns.forEach(btn => {
        btn.onclick = (e) => {
            inputValue += btn.textContent
            setInputValue(inputValue)
            return getInputValue(inputValue)
        }
    });
}

const app = ()=> {
    handleInputEvent()
    console.log(handleInputEvent())
}

app()


