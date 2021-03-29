import { shouldRun } from './helpers';


chrome.runtime.sendMessage({}, (response) => {
    const checkReady = setInterval(() => {
        if (document.readyState === "complete") {
            clearInterval(checkReady)
            const { location: { host } } = window;
            if (!shouldRun(host)) {
                return;
            }

            console.log()
        }
    })
})