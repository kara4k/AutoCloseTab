chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
        if (request.greeting === "hello"){
            try {
                chrome.tabs.remove(sender.tab.id)
            } catch (e) {
                console.log(e)
            }
        }

    });

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    chrome.storage.sync.get('urls', function(data) {
        let urls = data.urls;

        if (urls.length === 1 && urls[0]==='') return;

        for (let i = 0; i < urls.length; i++) {
            let url = urls[i].trim();

            if (url!=='' && tab.url.match(url) != null) {
                try {
                    chrome.tabs.remove(tabId);
                } catch (e) {
                    console.log(e)
                }
            }
        }
    });


});
