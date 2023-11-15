var generator = document.getElementById("generator");
generator.style.fontSize = "30px";
var characters = "0123456789abcdefghijklmnopqrstuvwxyz!@#$%^&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var passwordlength = 12;
var password = "";

function passwordgenerator() {
    for (var i = 0; i <= passwordlength ; i++) {
        var random = Math.floor(Math.random() * characters.length)
        password += characters.substring(random,random  +1 )
    }
    console.log(password)
    generator.value = password

    password = ""
}
function passwordcopy(){
    generator.select();
    document.execCommand("copy")
}