chrome.runtime.onInstalled.addListener(function (object) {
    chrome.tabs.create({
        url: "../welcome.html"
    }, function (tab) {});
    chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
        chrome.declarativeContent.onPageChanged.addRules([{
                    conditions: [new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: {
                                hostContains: 'mashov.info'
                            }
                        }),
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: {
                                hostContains: 'bigbluebutton.org'
                            }
                        }),
                        new chrome.declarativeContent.PageStateMatcher({
                            pageUrl: {
                                urlContains: '/rmsfmTemplates'
                            }
                        })
                    ],
                    actions: [new chrome.declarativeContent.ShowPageAction()]
                }
            ]);
    });
});
chrome.contextMenus.create({
    id: "openMashov",
    title: "Open Mashov",
    contexts: ["page_action"]
}, () => chrome.runtime.lastError);

chrome.contextMenus.onClicked.addListener(function (info, tab) {
    if (info.menuItemId == "openMashov") {
        window.open("https://web.mashov.info/students/");
    }
});
