function hitung() {
    var form = document.getElementById('calcForm');
    var bil1 = parseFloat(form.bilangan1.value);
    var bil2 = parseFloat(form.bilangan2.value);

    // validasi
    if (isNaN(bil1) || isNaN(bil2)) {
        alert("Harap masukkan angka!!");
    }
    else {
        var action = event.target.value;
        switch (action) {
            case 'act_jumlah':
                var total = bil1 + bil2; //rumus
                break;
            case 'act_kurang':
                var total = bil1 - bil2; //rumus
                break;
            case 'act_kali':
                var total = bil1 * bil2; //rumus
                break;
            case 'act_bagi':
                var total = bil1 / bil2; //rumus
                break;
            case 'act_pangkat':
                var total = bil1 ** bil2; //rumus
                break;
            default:
                break;
        }

        form.hasil.value = total;
    }
}

