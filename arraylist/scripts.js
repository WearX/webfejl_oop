class ArrayList {
    /**
     * @type {Number}
    **/ 
    #lenght
    #state

    get Count(){
        return this.#lenght
    }
    constructor(){
        this.#lenght = 0;
        this.#state = {};
    }

    Add(item) {
        const index = this.#lenght
        this.#state[index] = item
        Object.defineProperty(this, index, {
            get: function(){
                return this.#state[index]
            },
            set: function(value){
                this.#state[index] = value
            }
                
        })
        this.#lenght ++
    }

    Clear(){
        this.#lenght = 0
        this.#state = {}
    }


}
const alma = {}
Object.defineProperty(alma, 'nev', {
    value: 'ferenc',
    writable: true
    
})
alma.nev = 'zsaklin'
console.log(alma)

const kufirc = new ArrayList()

kufirc.Add(5)
console.log(kufirc[0])
console.log(kufirc)    
kufirc.Add("asd")
console.log(kufirc)
kufirc.Add({new:'Jozsi'})
console.log(kufirc)