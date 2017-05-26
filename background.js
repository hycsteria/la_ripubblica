// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript(null, {file:'jquery-3.2.1.min.js'});
  chrome.tabs.executeScript({
    file: 'la_ripubblica.js'
  });
});

