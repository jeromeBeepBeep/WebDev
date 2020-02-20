class TestObject {

    constructor(par1,par2){
        this.par1=par1;
        this.par2=par2;
    }
    
    toString(){
        return this.par1+" "+this.par2;
    }
}  
    let firstObject = new TestObject("p1","p2");
    let secondOject = new TestObject("Jérôme","Poirette");

    console.log(firstObject.toString());
    console.log(secondOject.toString());






