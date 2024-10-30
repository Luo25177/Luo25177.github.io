function getHitokoto() {
  fetch('https://v1.hitokoto.cn/')
      .then(response => response.json())
      .then(data => {
        document.getElementById('hitokoto').textContent = data.hitokoto;
      })
      .catch(error => {
        console.error('Error fetching hitokoto:', error);
        document.getElementById('hitokoto').textContent = '加载失败';
      });
}


getHitokoto();
