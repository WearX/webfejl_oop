const array = [
    {
        firstname1: 'Géza',
        firstname2: 'Ferenc',
        lastname: 'Kocsis',
    },
    {
        firstname1: 'Mária',
        firstname2: 'Júlia',
        lastname: 'Horváth',
    },
    {
        firstname1: 'Ferenc',
        lastname: 'Balogh',
    },
    {
        firstname1: 'Gábor',
        firstname2: 'Attila',
        lastname: 'Horváth'
    },
]

class Person{
    constructor(object){
        this.firstname1 = object.firstname1
        this.firstname2 = object.firstname2
        this.lastname = object.lastname
    }
    render(parent){
        const sor = document.createElement('tr')
        parent.appendChild(sor)

        const td1 = document.createElement('td')
        td1.innerHTML= this.lastname
        sor.appendChild(td1)

        const td2 = document.createElement('td')
        td2.innerHTML= this.firstname1
        sor.appendChild(td2)

        if(this.firstname2 == undefined){
            td2.colSpan = 2
        }
        else{
            const td3 = document.createElement('td')
            td3.innerHTML= this.firstname2
            sor.appendChild(td3)
        }

        

    }
}

class FormController{
    #form
    constructor(form){
        this.#form = form
    }
    get lastname(){
        const w = this.#getInputById('lastname')
        return w.value
    }
    get firstname1(){
        const w = this.#getInputById('firstname1')
        return w.value
    } 
    get firstname2(){
        const w = this.#getInputById('firstname2')
        return w.value
    } 

    #getInputById(id){
        return this.#form.querySelector('#' + id)
    }
} 



function init(){
    const tbody = document.getElementById('tbodyId')
    const form = document.getElementById('form')
    const ctrl = new FormController(form)
    addEventListener('submit', function(e){
        e.preventDefault()

        const obj = {
            lastname: ctrl.lastname,
            firstname1: ctrl.firstname1,
            firstname2: ctrl.firstname2
        }


        const pers = new Person(obj)
        pers.render(tbody)
    })
    for(const elem of array){
        const person = new Person(elem)
        person.render(tbody)
        
    }
    
    
    
    
}
init()  