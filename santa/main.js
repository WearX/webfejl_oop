const companionList = [
    {
        firstName: 'Géza',
        lastName: 'Kiss',
        area: 'plastic',
        products: ['kisauto', 'barbibaba']
    },
    {
        firstName: 'Ferenc',
        lastName: 'Tóth',
        area: 'paper',
        products: ['könyv']
    },
    {
        firstName: 'Gábor',
        lastName: 'Nagy',
        area: 'plastic',
        products: ['zokni']
    },
];
const factory = new Factory();

document.getElementById('companion').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = e.currentTarget;
    addCompanion(form, factory);
    form.reset();
});

document.getElementById('product').addEventListener('submit', function (e) {
    e.preventDefault();
    var form = e.currentTarget;
    addProductForm(form, factory);
});

document.getElementById('newareaform').addEventListener('submit', function (e) {
    e.preventDefault();
    const reszlegName = e.target.querySelector('#reszlegName').value;
    factory.addReszleg(reszlegName);
    e.target.reset()
});

function initTable() {
    for (let i = 0; i < companionList.length; i++) {
        const data = companionList[i];
        const comp = new Companion(i, data.firstName, data.lastName, data.area);

        for (const product of data.products) {
            comp.addProduct(product);
        }

        factory.addMano(comp);
        factory.addReszleg(data.area)
    }

    populateAreaSelector(factory)
}



initTable();
