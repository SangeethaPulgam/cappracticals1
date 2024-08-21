module.exports = cds.service.impl( async function(){
    const { employeesSet } = this.entities;
 
    //create
    this.before('CREATE',employeesSet,async(req)=>{
        const { salaryAmount, Currency_code } = req.data;
        if (salaryAmount>50000 || Currency_code!=="USD"){
            req.error(500,'Employee salary must be less than 50000 USD');
        }
    });
    this.after('CREATE',employeesSet, async (req) => {
        console.log('Create operation successful');
    });
 
 
    //update
    this.before('UPDATE', employeesSet, async(req) => {
       
        var salaryAmount = parseInt(req.data.salaryAmount);
        let Currency_code = req.data.Currency_code;
        let id=req.data.ID;
        let nameFirst=req.data.nameFirst;
        let loginName=req.data.loginName;
        const oldData = await SELECT.from(employeesSet).columns('nameFirst','loginName').where ({ID:id})
        if(salaryAmount>50000 || Currency_code!=='USD'){
            req.error(500,"Employees salary must be less than 50000 USD");
        }else if(nameFirst != oldData[0].nameFirst || loginName!==oldData[0].loginName){
            req.error(500,"Operation not allowed");
        }
    });
 
    this.after('UPDATE',employeesSet, async (req) => {
        console.log('Update Operation Successful');
    });
 
 
    //delete
    this.before('DELETE', employeesSet, async(req)=>{
        let id=req.data.ID;
        const oldData = await SELECT.from(employeesSet).columns('nameFirst').where ({ID:id});
        console.log(oldData[0].nameFirst[0]);
        if(oldData[0].nameFirst[0]=='S'){
            req.error(500,'Operation Not Possible');
        }
    });
   
    this.after('DELETE',employeesSet, async (req) => {
        console.log('Delete Operation Successful');
    });
})  