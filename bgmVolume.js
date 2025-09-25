function handleSaveClick() {
  // simpan bahasa
  localStorage.setItem('hokkienGameLanguage', currentLanguage);

  // simpan volume (0.0 – 1.0)
  localStorage.setItem('bgmVolume', (currentVolume / 100).toString());

  // arahkan sesuai bahasa
  if (currentLanguage === 'en') {
    window.location.href = 'Li-Ho-EN.html';
  } else {
    alert("Settings saved!");
  }
}
