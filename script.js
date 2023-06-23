const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', function () {
  const img = document.createElement('img');
  const randomId = Math.floor(Math.random() * 1000) + 1;

  img.src = `https://picsum.photos/id/${randomId}/150/150?random=${randomId}`;
  // 버튼이 클릭되었을 때 실행되는 코드
  gridContainer.appendChild(img);
});
