const getTitle = () => {
  const title = document.querySelector('title');
  return !!title ? title.textContent.trim() : '';
}

const getURL = () => {
  return document.location.href;
}

const getDesc = () => {
  const meta = document.querySelector('meta[name="description"]');
  return !!meta ? meta.content : '';
}

const getFavicon = () => {
  const link = document.querySelector('link[rel*="icon"]');
  return !!link ? link.href : './business.png';
}

chrome.runtime.onMessage.addListener( (req, sender, sendRes) => {
  if ( req.type === 'from-popup' ) {
    sendRes({
      type: 'from-content',
      title: getTitle(),
      url: getURL(),
      description: getDesc(),
      favicon: getFavicon()
    });
  }
});

chrome.runtime.onMessage.addListener( req => {
  if ( req.type === 'open-link' ) {
    chrome.tabs.create({
      url: req.url,
      active: true
    });
  }
});