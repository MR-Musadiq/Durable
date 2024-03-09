function signin(){
    var username=document.getElementById("a").value
    var password=document.getElementById("b").value

    if(username==""&& password==""){
        alert("KINDLY ENTER USERNAME AND PASSWORD")
    }
    else{
        localStorage.setItem("username",username)
        localStorage.setItem("password",password)
        alert("ACCOUNT CREATED SUCCESSFULLY")
    }


}
function login(){
    var l_username=document.getElementById("login_username").value
    var l_password=document.getElementById("login_password").value

    var b=localStorage.getItem("username");
    var c=localStorage.getItem("password");

    if(l_username==b && l_password==c){
        alert("LOGIN SUCCESSFULLY")
        window.open("home.html")
    }
    else{
        alert("LOGIN FAILED")
    }

}