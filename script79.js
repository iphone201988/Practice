class Employee{
    login(){
        console.log(`Employee Login`)
    }
    logout(){
        console.log(`Employee Logout`)
    }
    requestLeaves(leaves){
        console.log(`Employee has requested ${leaves} leaeves`)
    }
}

class Programmer extends Employee{
    requestCoffee(coffee){
        console.log(`Employee has requested ${coffee} coffee`)
    }
    requestLeaves(leaves){
        super.requestLeaves(leaves)                                                                                                                                                                                                                 
    }
}

let e = new Employee()
e.login()
e.requestLeaves(3)

let p = new Programmer()
p.logout()
p.requestLeaves(4)