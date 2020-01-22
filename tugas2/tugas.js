const form = document.querySelector('#form')

form.addEventListener('submit', function(e) {
    e.preventDefault();
    var nama = document.getElementById("nama").value;   
    var email = document.getElementById("email").value;
    var alamat = document.getElementById("alamat").value;
    var no_telpon = document.getElementById("no_telpon").value;
    if (nama != "" && email!="" && alamat !="" && no_telpon !="") {
        return true;
        }
        else if(nama==""){
            alert('nama Harus diisi');
        }
        else if (email == "") {
            alert("Nama Diisi Masa email enggak ??isi donk");
        }
        else if (alamat == "") {
            alert("isi Data Alamat !");
        }
        else if (no_telpon == "") {
            alert("Silahkan isi no telpon anda");
        }
        else{
          alert('Berhasil !!'+'Nama:'+nama+'\n'+'Email:'+email+'\n'+'alamat:'+alamat+'\n'+'No_telpon:'+no_telpon);
        } 
})
