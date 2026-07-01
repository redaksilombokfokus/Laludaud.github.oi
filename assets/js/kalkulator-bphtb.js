// Kalkulator BPHTB
function hitungBPHTB() {
    const nilaiTransaksi = parseFloat(document.getElementById('nilaiTransaksi').value) || 0;
    const npop = parseFloat(document.getElementById('npop').value) || 0;
    const npoptkp = parseFloat(document.getElementById('npoptkp').value) || 30000000;
    const tarifBphtb = parseFloat(document.getElementById('tarifBphtb').value) || 5;

    // Hitung NOPTKP Pemungut (5% dari NPOP)
    const noptkpPemungut = npop * 0.05;

    // Hitung Dasar Pengenaan Pajak (DPP)
    const dpp = Math.max(0, npop - npoptkp - noptkpPemungut);

    // Hitung BPHTB
    const bphtbTerutang = dpp * (tarifBphtb / 100);

    // Update hasil
    document.getElementById('hasilNilaiTransaksi').textContent = formatCurrency(nilaiTransaksi);
    document.getElementById('hasilNPOP').textContent = formatCurrency(npop);
    document.getElementById('hasilNPOPTKP').textContent = formatCurrency(npoptkp);
    document.getElementById('hasilNOPTKPPemungut').textContent = formatCurrency(noptkpPemungut);
    document.getElementById('hasilDPP').textContent = formatCurrency(dpp);
    document.getElementById('hasilTarif').textContent = tarifBphtb + '%';
    document.getElementById('hasilBPHTB').textContent = formatCurrency(bphtbTerutang);
}

function resetBPHTB() {
    document.getElementById('nilaiTransaksi').value = '';
    document.getElementById('npop').value = '';
    document.getElementById('npoptkp').value = '';
    document.getElementById('tarifBphtb').value = '5';
    
    document.getElementById('hasilNilaiTransaksi').textContent = 'Rp 0';
    document.getElementById('hasilNPOP').textContent = 'Rp 0';
    document.getElementById('hasilNPOPTKP').textContent = 'Rp 0';
    document.getElementById('hasilNOPTKPPemungut').textContent = 'Rp 0';
    document.getElementById('hasilDPP').textContent = 'Rp 0';
    document.getElementById('hasilTarif').textContent = '5%';
    document.getElementById('hasilBPHTB').textContent = 'Rp 0';
}

// Auto-calculate on input
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['nilaiTransaksi', 'npop', 'npoptkp', 'tarifBphtb'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', hitungBPHTB);
            element.addEventListener('change', hitungBPHTB);
        }
    });
});
