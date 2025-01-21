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
        for (let i = 0; i < this.#lenght; i++){
            delete this[i]
        }
        this.#lenght = 0
        this.#state = {}
    }
    Contains(item) {
        for (let i = 0; i < this.#lenght; i++){
            if (this.#state[i] === item){
                return true
            }
        }
        return false
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
kufirc.Add("alma")
console.log(kufirc)
kufirc.Add({nev:'Jozsi'})
console.log(kufirc)

console.log(kufirc.Contains(5)) // true
console.log(kufirc.Contains("alma")) // true
console.log(kufirc.Contains({ nev: "Jozsi" })) // false mert nem ugyan az a ref
