//Tura ve Yazı sayılarını oluştur ve başlangıçta sıfırla
let tura = 0;
let yazi = 0;

//HTML'de bulunan coin,flip-button ve reset-button seçimi
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//flip-button tıklandığında
flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2); //rastgele 0 veya 1 sayısını seçer Tura:0,Yazi:1
  coin.style.animation = "none"; //Coin animasyonunu geçici olarak kapatma
  if (i === true) {
    setTimeout(() => {
      coin.style.animation = "spin-tura 3s forwards";
    }, 100);
    tura++;
  } else {
    setTimeout(() => {
      coin.style.animation = "spin-yazi 3s forwards";
    }, 100);
    yazi++;
  }

  //Yazi-Tuta skor bilgisini güncelle ve butonları devre dışı bırak
  setTimeout(updateStats, 3000);
  disableButton();
});

//Yazi-Tuta skor bilgisini güncelleme fonksiyonu-updateStats
function updateStats() {
  document.querySelector("#tura-count").textContent = `Tura:${tura}`;
  document.querySelector("#yazi-count").textContent = `Yazı:${yazi}`;
}
//butonları devre dışı bırak
function disableButton() {
  flipBtn.disabled = true;
  setTimeout(() => {
    flipBtn.disabled = false;
  }, 3000);
}

resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  tura = 0;
  yazi = 0;
  updateStats();
});
