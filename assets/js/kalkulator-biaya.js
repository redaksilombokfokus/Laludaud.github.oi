// Kalkulator Biaya Notaris
function updateBiayaNotaris() {
    // Bisa digunakan untuk update UI berdasarkan jenis layanan
}

function hitungBiayaNotaris() {
    const nilaiObjek = parseFloat(document.getElementById('nilaiObjekNotaris').value) || 0;
    const jenisLayanan = document.getElementById('jenisLayanan').value;
    
    let jenisTeks = '';
    
    switch(jenisLayanan) {
        case 'ajb':
            jenisTeks = 'AJB (Akta Jual Beli)';
            break;
        case 'apht':
            jenisTeks = 'APHT (Angsuran Hak Tanggungan)';
            break;
        case 'hibah':
            jenisTeks = 'Hibah';
            break;
        case 'surat-kuasa':
            jenisTeks = 'Surat Kuasa';
            break;
        case 'perjanjian':
            jenisTeks = 'Perjanjian';
            break;
    }
    
    // Hitung komponen biaya
    const honorariumNotaris = nilaiObjek * 0.01; // 1%
    const biayaPPAT = nilaiObjek * 0.0075; // 0.75%
    const materai = 10000 * 3; // Rp 10.000 x 3
    const salinan = 50000 * 2; // Rp 50.000 x 2 lembar
    const admin = 500000; // Rp 500.000
    
    const total = honorariumNotaris + biayaPPAT + materai + salinan + admin;
    
    // Update hasil
    document.getElementById('hasilNilaiObjek').textContent = formatCurrency(nilaiObjek);
    document.getElementById('hasilJenisLayanan').textContent = jenisTeks;
    document.getElementById('hasilHonorariumNotaris').textContent = formatCurrency(honorariumNotaris);
    document.getElementById('hasilBiayaPPAT').textContent = formatCurrency(biayaPPAT);
    document.getElementById('hasilMateraiNotaris').textContent = formatCurrency(materai);
    document.getElementById('hasilSalinanNotaris').textContent = formatCurrency(salinan);
    document.getElementById('hasilAdminNotaris').textContent = formatCurrency(admin);
    document.getElementById('hasilTotalNotaris').textContent = formatCurrency(total);
}

function resetBiayaNotaris() {
    document.getElementById('nilaiObjekNotaris').value = '';
    document.getElementById('jenisLayanan').value = 'ajb';
    
    document.getElementById('hasilNilaiObjek').textContent = 'Rp 0';
    document.getElementById('hasilJenisLayanan').textContent = '-';
    document.getElementById('hasilHonorariumNotaris').textContent = 'Rp 0';
    document.getElementById('hasilBiayaPPAT').textContent = 'Rp 0';
    document.getElementById('hasilMateraiNotaris').textContent = 'Rp 0';
    document.getElementById('hasilSalinanNotaris').textContent = 'Rp 0';
    document.getElementById('hasilAdminNotaris').textContent = 'Rp 0';
    document.getElementById('hasilTotalNotaris').textContent = 'Rp 0';
}

// Auto-calculate on input
document.addEventListener('DOMContentLoaded', function() {
    const nilaiInput = document.getElementById('nilaiObjekNotaris');
    const jenisInput = document.getElementById('jenisLayanan');
    
    if (nilaiInput) {
        nilaiInput.addEventListener('input', hitungBiayaNotaris);
    }
    if (jenisInput) {
        jenisInput.addEventListener('change', hitungBiayaNotaris);
    }
});
