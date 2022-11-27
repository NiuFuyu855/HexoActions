let configs = {
  qrcodeUrl: 'https://off.cx/img/zfb.jpg', // 卡正面的二维码
  invitationText: 'Invitation', // 卡正面左上角的文本
  cardName: 'NameFlying', // 卡的名字
  cardId: '114514', // 卡的数字
  endText: 'created:', // 卡正面名字下面的文本
  endDate: '14/10/2022', // 卡正面名字下面的日期
  cardHolder: 'Welcome to my blog', // 卡正面左下角的文本
  back1: 'sitelink', // 卡背面文本 1
  back2: '欢迎加入', // 卡背面文本 2
  backUrl: '???', // 卡背面文本 2 链接
  back3: '123', // 卡背面文本 3
  back4: '4561' // 卡背面文本 4
}

if (window.location.pathname.startsWith('/posts')) {
  let businessCard = BusinessCard.get(configs);
  let positionSelector = 'article';
  console.log(`BusinessCard position selector: ${positionSelector}`);
  console.log('Use BusinessCard configs', configs);

  document.addEventListener('DOMContentLoaded', () => {
    let container = document.createElement('div');
    container.innerHTML = businessCard;
    let post = document.querySelector(positionSelector);
    post.appendChild(container);
    console.log('Sucessfully loaded BusinessCard!');
  });
}
