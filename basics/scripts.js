// *** Konstruktoros megoldás ***
function Jatekos(becenev) {
    this.becenev = becenev;
    this.jatszottMeccs = 0;
}

Jatekos.prototype.szintEllenorzes = function() {
    let szint;
    if (this.jatszottMeccs <= 3) {
        szint = "A";
    } else if (this.jatszottMeccs <= 6) {
        szint = "B";
    } else {
        szint = "C";
    }
    console.log(`${this.becenev} | Szint: ${szint}`);
};

Jatekos.prototype.meccsetJatszott = function() {
    this.jatszottMeccs++;
    console.log(`${this.becenev} eddig ${this.jatszottMeccs} meccset játszott`);
};

const jatekos1 = new Jatekos("gomszab");
jatekos1.meccsetJatszott();
jatekos1.meccsetJatszott();
jatekos1.szintEllenorzes();
jatekos1.meccsetJatszott();
jatekos1.meccsetJatszott();
jatekos1.szintEllenorzes();
jatekos1.meccsetJatszott();
jatekos1.szintEllenorzes();