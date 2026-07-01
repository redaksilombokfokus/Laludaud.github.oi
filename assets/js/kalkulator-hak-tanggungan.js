// Kalkulator Hak Tanggungan
function hitungHakTanggungan() {
    const nilaiPinjaman = parseFloat(document.getElementById('nilaiPinjaman').value) || 0;
    const nilaiTanah = parseFloat(document.getElementById('nilaiTanah').value) || 0;
    const bungaPinjaman = parseFloat(document.getElementById('bungaPinjaman').value) || 0;
    const lamaAngsuran = parseInt(document.getElementById('lamaAngsuran').value) || 12;
    
    // Hitung Biaya APHT (2% dari pinjaman)
    const biayaAPHT = nilaiPinjaman * 0.02;
    
    // SKMHT
    const skmht = 500000;
    
    // Hitung Biaya Registrasi HT (0.5% dari nilai tanah)
    const registrasiHT = nilaiTanah * 0.005;
    
    // Hitung bunga bulanan
    const bungaBulanan = bungaPinjaman / 12 / 100;
    
    // Hitung angsuran bulanan (rumus anuitas)
    // A = P * [r(1+r)^n] / [(1+r)^n - 1]
    const n = lamaAngsuran;
    const r = bungaBulanan;
    const numerator = r * Math.pow(1 + r, n);
    const denominator = Math.pow(1 + r, n) - 1;
    const angsuranBulanan = nilaiPinjaman * (numerator / denominator);
    
    // Total pembayaran
    const totalPembayaran = angsuranBulanan * lamaAngsuran;
    const totalBunga = totalPembayaran - nilaiPinjaman;
    
    // Update hasil
    document.getElementById('hasilNilaiPinjamanHT').textContent = formatCurrency(nilaiPinjaman);
    document.getElementById('hasilNilaiTanah').textContent = formatCurrency(nilaiTanah);
    document.getElementById('hasilBiayaAPHT').textContent = formatCurrency(biayaAPHT);
    document.getElementById('hasilSKMHT').textContent = formatCurrency(skmht);
    document.getElementById('hasilRegistrasiHT').textContent = formatCurrency(registrasiHT);
    document.getElementById('hasilAngsuranBulanan').textContent = formatCurrency(angsuranBulanan);
    document.getElementById('hasilTotalBunga').textContent = formatCurrency(totalBunga);
    document.getElementById('hasilTotalPembayaran').textContent = formatCurrency(totalPembayaran + biayaAPHT + skmht + registrasiHT);
}

function resetHakTanggungan() {
    document.getElementById('nilaiPinjaman').value = '';
    document.getElementById('nilaiTanah').value = '';
    document.getElementById('bungaPinjaman').value = '';
    document.getElementById('lamaAngsuran').value = '12';
    
    document.getElementById('hasilNilaiPinjamanHT').textContent = 'Rp 0';
    document.getElementById('hasilNilaiTanah').textContent = 'Rp 0';
    document.getElementById('hasilBiayaAPHT').textContent = 'Rp 0';
    document.getElementById('hasilSKMHT').textContent = 'Rp 500.000';
    document.getElementById('hasilRegistrasiHT').textContent = 'Rp 0';
    document.getElementById('hasilAngsuranBulanan').textContent = 'Rp 0';
    document.getElementById('hasilTotalBunga').textContent = 'Rp 0';
    document.getElementById('hasilTotalPembayaran').textContent = 'Rp 0';
}

// Auto-calculate on input
document.addEventListener('DOMContentLoaded', function() {
    const inputs = ['nilaiPinjaman', 'nilaiTanah', 'bungaPinjaman', 'lamaAngsuran'];
    inputs.forEach(id => {
        const element = document.getElementById(id);
        if (element) {
            element.addEventListener('input', hitungHakTanggungan);
            element.addEventListener('change', hitungHakTanggungan);
        }
    });
});
