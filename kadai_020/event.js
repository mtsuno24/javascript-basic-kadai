const btn = document.getElementById('btn');

const newText = document.getElementById('text');

btn.addEventListener('click', () => {
  newText.textContent = 'ボタンをクリックしました';
  console.log(newText);
});
