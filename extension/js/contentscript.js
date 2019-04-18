chrome.storage.sync.get('text', function (data) {
    let textFilters = data.text;

    if (textFilters.length === 1 && textFilters[0]==='') return;

    for (let i = 0; i < textFilters.length; i++) {
        let text = textFilters[i].trim();

        if (text!=='' && document.body.textContent.match(text) != null) {
            try {
                chrome.runtime.sendMessage({greeting: "hello"});
            } catch (e) {
                console.log(e)
            }
        }
    }
});

