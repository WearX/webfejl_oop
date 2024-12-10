class Factory{
    constructor()
    {
        this.manolista = []
        this.reszleglista = []
    }
    addMano(mano)
    {
        this.manolista.push(mano)
        createRow(mano)
    }
    createID()
    {
        return this.manolista.length
    }
    newId(){
        return this.companionList.length;
    }
    addReszleg(reszleg){
        if (!reszleg || this.reszleglista.indexOf(reszleg) !== -1) {
            return
        }

        this.reszleglista.push(reszleg)

        const selector = document.getElementById('carea')
        const option = document.createElement('option')
        option.value = reszleg
        option.innerHTML = reszleg
        selector.appendChild(option)
    }
    getCompanionById(id){
        for (let i = 0; i < this.manolista.length; i++) {
            if (this.manolista[i].id === id) {
                return this.manolista[i]
            }
        }
        return null
    }
    addComp(comp){
        this.manolista.push(comp)
        createRow(comp);
        appendToSelector(comp.id, comp.getFullName());
    } 
}

class Companion{

    constructor(id, keresztnev, vezeteknev, reszleg){
        this.id = id
        this.keresztnev = keresztnev
        this.vezeteknev = vezeteknev
        this.reszleg = reszleg
        this.products = []
    }
    addProduct(product){ 
        this.products.push(product)
    }
    getName(){ 
        return this.vezeteknev + " " + this.keresztnev
    }
}