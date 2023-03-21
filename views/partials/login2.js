function validate() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username == "" || password == "") {
        alert("All fields are required");
        return false;
    }
    
    if (password.length < 8) {
        alert("Password must be at least 8 characters long");
        return false;
    }

    const special = /[ !@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;

    if (!special.test(password)) {
      alert("Password must contain at least one special character");
      return false;
    }
    
    return true;
}