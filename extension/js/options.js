let applyButton = document.getElementById("save_btn");
let urlsTextArea = document.getElementById("url_patterns_area");
let textTextArea = document.getElementById("text_patterns_area");

chrome.storage.sync.get('urls', function(data) {
    urlsTextArea.value = data.urls.join("\n");
});
chrome.storage.sync.get('text', function(data) {
    textTextArea.value = data.text.join("\n");
});

applyButton.addEventListener("click", function () {
    let actualUrls = urlsTextArea.value.split("\n");
    let actualText = textTextArea.value.split("\n");

    chrome.storage.sync.set({urls: actualUrls, text: actualText});
});
