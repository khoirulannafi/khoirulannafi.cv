function cekIsi() {
    var a = document.getElementById("nama");
    var b = document.getElementById("email");
    var c = document.getElementById("pass");
    var d = document.getElementById("rtypass");
    if (a.value != "" && b.value != "" && c.value != "" && d.value != "") {
        if (c.value != d.value) {
            alert("Password tidak sesuai !!");
        }
        return true;
    } else {
        alert("Semua kolom harus diisi !!");
    }
}