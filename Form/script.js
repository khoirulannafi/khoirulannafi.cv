function cekIsi() {
    var a = document.getElementById("nama");
    var b = document.getElementById("email");
    var c = document.getElementById("pass");
    var d = document.getElementById("rtypass");
    if (a.value == "") {
        alert("Isi nama terlebih dahulu")
        a.focus();
        return false;
    } else if (b.value == "") {
        alert("Isi email terlebih dahulu")
        b.focus();
        return false;
    } else if (c.value == "") {
        alert("Isi password terlebih dahulu")
        c.focus();
        return false;
    } else if (d.value == "") {
        alert("Ulangi password yang sama")
        d.focus();
        return false;
    } else if (c.value != d.value) {
        alert("Password yang dimasukkan tidak sama")
        d.focus();
        return false;
    } else {
        alert("Pengisian form berhasil")
        return true;
    }
}
