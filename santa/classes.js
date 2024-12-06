class Factory{
    constructor()
    {
        this.manolista = []
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
 // TODO 1, 2, 3, 4, 9, 10
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

    // TODO 5
}