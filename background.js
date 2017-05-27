// Called when the user clicks on the browser action.

chrome.browserAction.onClicked.addListener(function(tab) {
  chrome.browserAction.setBadgeText({text: "ON"});
  //TODO: move jquery to lib folder
  chrome.tabs.executeScript(null, {file:'jquery-3.2.1.min.js'});
  chrome.tabs.executeScript({
    file: 'la_ripubblica.js'
  });
});

