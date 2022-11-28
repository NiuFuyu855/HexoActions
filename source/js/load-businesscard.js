let configs = {
  qrcodeUrl: 'https://off.cx/img/zfb.jpg', // 卡正面的二维码
  invitationText: 'Invitation', // 卡正面左上角的文本
  cardName: 'Niute Fony', // 卡的名字
  cardId: '791486694', // 卡的数字
  endText: 'created:', // 卡正面名字下面的文本
  endDate: '28/11/2022', // 卡正面名字下面的日期
  cardHolder: 'Welcome to my channel', // 卡正面左下角的文本
  back1: 'sitelink', // 卡背面文本 1
  back2: '欢迎加入【Niuteの交流群】', // 卡背面文本 2
  backUrl: 'https://t.me/NIUTECHAT_CN', // 卡背面文本 2 链接
  back3: 'Use this card to join the channel and participate in a pleasant discussion together .', // 卡背面文本 3
  back4: 'Welcome to Niute's channel, wish you a nice day.' // 卡背面文本 4
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
