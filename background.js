// Called when the user clicks on the browser action.
chrome.browserAction.onClicked.addListener(function(tab) {

  window.alert("Primo");
  console.log('Turning ' + tab.url + ' red!');
  chrome.tabs.executeScript({
    file: 'substituteDummyForCartoons()'
  });
});

