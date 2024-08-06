function showPage(pageId) {
  const pages = document.querySelectorAll(".page");
  pages.forEach((page) => {
    page.style.display = "none";
  });
  document.getElementById(pageId).style.display = "block";
}

function validateForm() {
  var nama = document.forms["transaksiForm"]["nama"].value;
  var email = document.forms["transaksiForm"]["email"].value;
  var produk = document.forms["transaksiForm"]["produk"].value;
  var jumlah = document.forms["transaksiForm"]["jumlah"].value;
  if (nama == "" || email == "" || produk == "" || jumlah == "") {
    alert("Semua bidang harus diisi");
    return false;
  }
  showPage("invoicePage");
  document.getElementById("invoiceNama").innerText = nama;
  document.getElementById("invoiceEmail").innerText = email;
  document.getElementById("invoiceProduk").innerText = produk;
  document.getElementById("invoiceJumlah").innerText = jumlah;
  var hargaProduk = 0;
  if (produk.includes("Steam Wallet")) {
    if (produk.includes("6000")) {
      hargaProduk = 6000;
    } else if (produk.includes("12000")) {
      hargaProduk = 12000;
    } else if (produk.includes("45000")) {
      hargaProduk = 45000;
    }
  } else if (produk.includes("Voucher Robux")) {
    if (produk.includes("400")) {
      hargaProduk = 50000;
    } else if (produk.includes("800")) {
      hargaProduk = 90000;
    } else if (produk.includes("1200")) {
      hargaProduk = 120000;
    }
  }
  var totalBiaya = hargaProduk * jumlah;
  document.getElementById("invoiceTotal").innerText =
    "Rp" + totalBiaya.toLocaleString();
  return false; //
}

document.addEventListener("DOMContentLoaded", function () {
  showPage("homePage");
});

const btnNext = document.querySelector(".btn-next");
const pesanProses = document.querySelector(".proses-pesan");

btnNext.addEventListener("click", () => {
  btnNext.style.display = "none";
  pesanProses.style.display = "block";
});
