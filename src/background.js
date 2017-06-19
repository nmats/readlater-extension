chrome.runtime.onMessage.addListener( (req, sender, sendRes) => {
  if ( req.type === 'from-content' ) {
    sendMessageToPopup({
      title: data.title,
      url: data.url
    });
  }
});

const sendMessageToPopup = data => {
  chrome.runtime.sendMessage({
    type: 'from-background',
    data: data
  });
}