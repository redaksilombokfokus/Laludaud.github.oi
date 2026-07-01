// Kalkulator PPh Final
function hitungPPh() {
    const nilaiTransaksi = parseFloat(document.getElementById('nilaiTransaksiPPh').value) || 0;
    const jenisPPh = document.getElementById('jenisPPh').value;
    
    let tarif = 0;
    let jenisTeks = '';
    
    switch(jenisPPh) {
        case 'penjualan-properti':
            tarif = 1;
            jenisTeks = 'Penjualan Properti - 1%';
            break;
        case 'penjualan-saham':
            tarif = 0.5;
            jenisTeks = 'Penjualan Saham - 0.5%';
            break;
        case 'bunga-kredit':
            tarif = 10;
            jenisTeks = 'Bunga Kredit - 10%';
            break;
        case 'dividen':
            tarif = 15;
            jenisTeks = 'Dividen - 15%';
            break;
    }
    
    const pphFinal = nilaiTransaksi * (tarif / 100);
    
    document.getElementById('hasilNilaiPPh').textContent = formatCurrency(nilaiTransaksi);
    document.getElementById('hasilJenisPPh').textContent = jenisTeks;
    document.getElementById('hasilTarifPPh').textContent = tarif + '%';
    document.getElementById('hasilPPhFinal').textContent = formatCurrency(pphFinal);
    
    // Update input field
    document.getElementById('nilaiBayarPPh').value = formatCurrency(pphFinal);
}

function resetPPh() {
    document.getElementById('nilaiTransaksiPPh').value = '';
    document.getElementById('jenisPPh').value = 'penjualan-properti';
    document.getElementById('nilaiBayarPPh').value = '';
    
    document.getElementById('hasilNilaiPPh').textContent = 'Rp 0';
    document.getElementById('hasilJenisPPh').textContent = '-';
    document.getElementById('hasilTarifPPh').textContent = '0%';
    document.getElementById('hasilPPhFinal').textContent = 'Rp 0';
}

// Auto-calculate on input
document.addEventListener('DOMContentLoaded', function() {
    const nilaiInput = document.getElementById('nilaiTransaksiPPh');
    const jenisInput = document.getElementById('jenisPPh');
    
    if (nilaiInput) {
        nilaiInput.addEventListener('input', hitungPPh);
    }
    if (jenisInput) {
        jenisInput.addEventListener('change', hitungPPh);
    }
});
