const form = document.getElementById('form')

form.addEventListener('submit', (e) => {
    e.preventDefault();
    let nome = document.getElementById('name').value
    let email = document.getElementById('email').value
    console.log(nome, email)
    if(nome == '' || email == '') {
        alert(`Preencha as informações corretamente! \u{26A0}`)
    } else {
        let data = {
            nome,
            email
        }
        let convertData = JSON.stringify(data)
        localStorage.setItem('lead', convertData)
        let msg = document.getElementById('content')
        msg.innerHTML = `<p>carregando... \u{23F3}<p>`
        setTimeout(() => {
            msg.innerHTML = `<p>feito! \u{2714}</p>`
            msg.style.color = 'green'
        }, 1000)
        msg.style.color = 'black'
    } 
})