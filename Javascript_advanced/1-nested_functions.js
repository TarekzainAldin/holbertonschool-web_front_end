// Step 1: Create globalVariable
let globalVariable = "Welcome";


const outer = () => {
    alert(globalVariable);  
    
    
    let course = "Holberton";


    const inner = () => {
        alert(globalVariable + " " + course);  
        
       
        let exclamation = "!";

       
        const inception = () => {
            alert(globalVariable + " " + course + exclamation);  // Alerts "Welcome Holberton!"
        };

        inception();  
    };

    inner();  
};


outer();
