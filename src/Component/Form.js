import './Form.css'    

const Form =()=>{
     const validateForm=()=>{
        let returnVal = true;

        let dataName = document.forms['myForm']['fname'].value;
        console.log(dataName);
        
        return false;
         
    } 
      
    return(      
        <div class="regForm">

        <form name="myForm" action="./object.html"  method="POST" onsubmit="return validateForm()">
            <h3 > Registration Form</h3>
            <div class="formDesign" id="fname">
                Name : <input type="text" name="fname" required/> <span class="formError"></span>
            </div>
            
            <div class="formDesign" id="email"> 
                Email : <input type="email" name="email" /> <span class="formError"></span>
            </div>
             
            <div class="formDesign" id="phone">
                Phone : <input type="phone" name="phone" required/> <span class="formError"></span>
            </div>

            <div class="formDesign" id="pass">
                Password : <input type="password" name="password" required/> <span class="formError"></span>
            </div>
            
            <div class="formDesign" id="cpass">
                Confirm Password : <input type="password" name="cpassword" required/> <span class="formError"></span>
            </div>

            <div>
                <button class = "btnSub">Submit</button>
            </div>
        </form>
        </div>
    )  
}
export default Form;