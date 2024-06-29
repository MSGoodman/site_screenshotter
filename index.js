const {devices} = require("@playwright/test");
const chromium = require("playwright").chromium;

let dodgyUrl = process.argv[2];
let productName = process.argv[3];
let url = new URL(cleanUrl(dodgyUrl));
let filename = `screenshots/${productName}.png`;

if (!dodgyUrl){
    console.log(`${productName} has no url`);
    return;
}
console.log(`Taking screenshot of ${productName} from ${url}`);

(async () => {
    const browser = await chromium.launch();

    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto(url.href.toString());
    await page.setViewportSize(devices['Pixel 7'].viewport);
    await page.waitForEvent("requestfinished").then(async () => {
        // await page.waitForTimeout(2000); // Sometimes you have to wait for stuff!
        await page.screenshot({ path: filename });
        await browser.close();
    });
})();

function cleanUrl(url) {
    // Found a gross mix of urls in the data, this is a sloppy fix
    return "https://www." + url.replace("http://", "").replace("https://", "").replace("www.","");
}
