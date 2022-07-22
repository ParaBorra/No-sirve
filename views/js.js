class nombre{

    constructor(primerNombre,segNombre){
        this.segNombre=segNombre;
        this.primerNombre=primerNombre;
        this.que="   cfgjk";
    }

    set SetsegNombre(canvio){
        segNombre=canvio;
    }

    get GETsegNombre(){
        return segNombre;
    }
}

const papa=new nombre("johan "," andres");

document.write(papa.primerNombre,papa.segNombre,papa.que);