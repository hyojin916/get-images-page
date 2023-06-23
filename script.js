const generateBtn = document.querySelector('#generateBtn');
const gridContainer = document.querySelector('#gridContainer');

generateBtn.addEventListener('click', function () {
  const existingImages = gridContainer.querySelectorAll('img');
  const imageCount = existingImages.length;

  if (imageCount === 20) {
    const confirmDelete = confirm(
      `이미지 ${imageCount}개가 찼습니다. 기존 이미지를 지우고 새로운 이미지를 가져올까요?`
    );

    if (confirmDelete) {
      existingImages.forEach((image) => image.remove());
    } else {
      return;
    }
  }

  const img = document.createElement('img');
  const randomId = Math.floor(Math.random() * 1000) + 1;
  img.src = `https://picsum.photos/id/${randomId}/150/150?random=${randomId}`;
  gridContainer.appendChild(img);
});
