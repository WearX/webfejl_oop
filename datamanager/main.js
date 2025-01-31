/**
 * @typedef {{nev: string, eletkor: number}}  Person
 * @callback UpdateCallBack
 * @param {Person[]} persons
 * @returns {void}
 */
class DataManager{
    /**
     * @type  {Person[]}
     */
    #array


    /**
     *  @type {UpdateCallBack}
     */
    #updateCallBack
    /**
     * @param {Person} array
     */ 
    constructor(array = []){
        this.#array = array
        this.#updateCallBack = () => {}
    }
    /**
     * 
     * @param {UpdateCallBack} callback 
     */
    SetUpdateCallback(callback){
        this.#updateCallBack = callback
        this.#updateCallBack(this.#array)
    }
    /**
     * @param {Person} ember
     */
    add(ember){
        this.#array.push(ember)
        this.#updateCallBack(this.#array)
    }
    filterName(nevpar){
        const results = []
        for(const elem of this.#array){
            if (elem.nev.includes(nevpar)) {
                results.push(elem)
            }
        }
        this.#updateCallBack(results)
    }
    filterAge(korpar){
        const results = []
        for(const elem of this.#array){
            if (elem.eletkor === korpar) {
                results.push(elem)
            }
        }
        this.#updateCallBack(results)
    }

}


class DataTable{
    /**
     * 
     * @param {DataManager} dataManager 
     */
    constructor(dataManager){
        const table = document.createElement('table')
        document.body.appendChild(table)

        const tbody = document.createElement('tbody')
        table.appendChild(tbody)

        dataManager.SetUpdateCallback((data) =>{
            tbody.innerHTML = ''
            for(const elem of data){
                const tr= document.createElement('tr')
                tbody.appendChild(tr)

                const td1 = document.createElement('td')
                tr.appendChild(td1)
                td1.innerHTML = elem.nev

                const td2 = document.createElement('td')
                td2.innerHTML = elem.eletkor
                tr.appendChild(td2)
            }
        })

    }
}

const dataManager = new DataManager(
    [{nev: 'fityma feri', eletkor: 17},
    {nev: 'pekingi peti', eletkor: 16},
    {nev: 'csapbetét csabi', eletkor: 17}]
)
const dataTable = new DataTable(dataManager)




