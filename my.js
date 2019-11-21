function fun(form) {
    if (form.id.value == "123@a.com") {
        if (form.pass.value == "123") {
            window.open('new.html');
        } else {
            alert("Invalid Password");
        }
    } else {
        alert("Invalid UserID");
    }
}
