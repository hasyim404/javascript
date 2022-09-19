function dataSiswa() {

    let forms = document.getElementById('form');
    let siswa = forms.nama.value;
    let profesi = forms.pekerjaan.value;
    let hb = forms.hobi.value;

    let data =
        `Nama: ${siswa}<br/>
        Pekerjaan: ${profesi}<br/>
        Hobby: ${hb}
        `;
    document.getElementById('isi').innerHTML = data;
};