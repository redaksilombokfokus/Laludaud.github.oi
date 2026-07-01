// Kalkulator AJB
function hitungAJB() {
    const nilaiTransaksi = parseFloat(document.getElementById('nilaiTransaksiAJB').value) || 0;
    const tarifHonorarium = parseFloat(document.getElementById('tarifHonorarium').value) || 1;
    const tarifPPAT = parseFloat(document.getElementById('tarifPPAT').value) || 1;
    const jumlahSalinan = parseInt(document.getElementById('jumlahSalinan').value) || 2;
    
    // Hitung BPHTB (5% setelah dikurangi NPOPTKP Rp 30jt dan 5% dari NPOP)
    const npoptkp = 30000000;
    const noptkpPemungut = nilaiTransaksi * 0.05;
    const dppBphtb = Math.max(0, nilaiTransaksi - npoptkp - noptkpPemungut);
    const bphtb = dppBphtb * 0.05;
    
    // Hitung PPh Final (1%)
    const pphFinal = nilaiTransaksi * 0.01;
    
    // Hitung Honorarium Notaris
    const honorarium = nilaiTransaksi * (tarifHonorarium / 100);
    
    // Hitung PPAT
    const ppat = nilaiTransaksi * (tarifPPAT / 100);
    
    // Hitung Materai
    const materai = 10000 * 3; // Rp 10.000 x 3 lembar
    
    // Hitung Salinan Akta
    const salinan = 50000 * jumlahSalinan;
    
    // Biaya Administrasi
    const admin = 500000;
    
    // Total
    const total = bphtb + pphFinal + honorarium + ppat + materai + salinan + admin;
    
    // Update hasil
    document.getElementById('hasilNilaiAJB').textContent = formatCurrency(nilaiTransaksi);
    document.getElementById('hasilBPHTBAJB').textContent = formatCurrency(bphtb);
    document.getElementById('hasilPPhAJB').textContent = formatCurrency(pphFinal);
    document.getElementById('hasilHonorarium').textContent = formatCurrency(honorarium);
    document.getElementById('hasilPPATAJB').textContent = formatCurrency(ppat);
    document.getElementById('hasilMaterai').textContent = formatCurrency(materai);
    document.getElementById('hasilSalinan').textContent = formatCurrency(salinan);
    document.getElementById('hasilAdmin').textContent = formatCurrency(admin);
    document.getElementById('hasilTotalAJB').textContent = formatCurrency(total);
}

function resetAJB() {
    document.getElementById('nilaiTransaksiAJB').value = '';
    document.getElementById('tarifHonorarium').value = '1';
    document.getElementById('tarifPPAT').value = '1';
    document.getElementById('jumlahSalinan').value = '2';
    
    document.getElementById('hasilNilaiAJB').textContent = 'Rp 0';
    document.getElementById('hasilBPHTBAJB').textContent = 'Rp 0';
    document.getElementById('hasilPPhAJB').textContent = 'Rp 0';
    document.getElementById('hasilHonorarium').textContent = 'Rp 0';
    document.getElementById('hasilPPATAJB').textContent = 'Rp 0';
    document.getElementById('hasilMaterai').textContent = 'Rp 0';
    document.getElementById('hasilSalinan').textContent = 'Rp 0';
    document.getElementById('hasilAdmin').textContent = 'Rp 0';
    document.getElementById('hasilTotalAJB').textContent = 'Rp 0';
}

// Auto-calculate on input
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['nilaiTransaksiAJB', 'tarifHonorarium', 'tarifPPAT', 'jumlahSalinan'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', hitungAJB);
            element.addEventListener('change', hitungAJB);
        }
    });
});
