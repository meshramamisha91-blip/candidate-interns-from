regForm.addEventListener("submit",function(e){
e.preventDefault();

let phone = document.getElementById("phone").value;

if(phone.length !== 10){
msg.style.color="red";
msg.innerHTML="❌ Mobile number must be exactly 10 digits";
return;
}

// SHOW loader
loader.style.display="flex";

let data={
name:document.getElementById("name").value,
email:document.getElementById("email").value,
phone:phone,
dob:document.getElementById("dob").value,
gender:document.querySelector('input[name="gender"]:checked').value,
address:document.getElementById("address").value,
password:document.getElementById("password").value
};

fetch("https://script.google.com/macros/s/AKfycbzFPH_uPQooOcrZ8HiqrFNdRmu2Y61RufwvxQdhGjfgcNSzGXoMudayLIrPP_8DFtn8/exec",{
method:"POST",
body:JSON.stringify(data)
})
.then(res => {

setTimeout(()=>{

loader.style.display="none";
regForm.style.display="none";

msg.innerHTML = "<h2 style='color:green'>✅ Form Submitted Successfully</h2>";

},1500);

});

});
