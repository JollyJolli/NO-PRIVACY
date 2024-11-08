// Function to detect the operating system
function detectOS() {
    let userAgent = window.navigator.userAgent;
    if (userAgent.indexOf("Windows NT 10.0") !== -1) return "Windows 10";
    if (userAgent.indexOf("Windows NT 6.2") !== -1) return "Windows 8";
    if (userAgent.indexOf("Windows NT 6.1") !== -1) return "Windows 7";
    if (userAgent.indexOf("Mac") !== -1) return "macOS";
    if (userAgent.indexOf("X11") !== -1) return "UNIX";
    if (userAgent.indexOf("Linux") !== -1) return "Linux";
    return "Unknown OS";
}

// Function to detect the browser
function detectBrowser() {
    let userAgent = navigator.userAgent;
    if (userAgent.indexOf("Firefox") > -1) return "Mozilla Firefox";
    if (userAgent.indexOf("SamsungBrowser") > -1) return "Samsung Browser";
    if (userAgent.indexOf("Opera") || userAgent.indexOf("OPR") > -1) return "Opera";
    if (userAgent.indexOf("Trident") > -1) return "Internet Explorer";
    if (userAgent.indexOf("Edge") > -1) return "Microsoft Edge";
    if (userAgent.indexOf("Chrome") > -1) return "Google Chrome";
    if (userAgent.indexOf("Safari") > -1) return "Safari";
    return "Unknown Browser";
}

// Screen and Display Information
function getScreenResolution() {
    return `${window.screen.width} x ${window.screen.height}`;
}
function getViewportSize() {
    return `${window.innerWidth} x ${window.innerHeight}`;
}
function getColorDepth() {
    return `${window.screen.colorDepth} bits`;
}
function getPixelDepth() {
    return `${window.screen.pixelDepth} bits`;
}
// Device Information
function getDeviceType() {
    return window.innerWidth <= 800 && window.innerHeight <= 600 ? "Mobile" : "Desktop";
}
function getLanguage() {
    return navigator.language || navigator.userLanguage;
}
function getTimeZone() {
    return Intl.DateTimeFormat().resolvedOptions().timeZone;
}
function getMemory() {
    return navigator.deviceMemory ? `${navigator.deviceMemory} GB` : "Unavailable";
}
function getCpuCores() {
    return navigator.hardwareConcurrency ? `${navigator.hardwareConcurrency} cores` : "Unavailable";
}

// Browser Information
function getPlugins() {
    let plugins = Array.from(navigator.plugins).map(plugin => plugin.name);
    return plugins.length > 0 ? plugins.join(", ") : "No plugins found";
}
function cookiesEnabled() {
    return navigator.cookieEnabled ? "Yes" : "No";
}
function doNotTrack() {
    return navigator.doNotTrack === "1" ? "Enabled" : "Disabled";
}
function getReferrer() {
    return document.referrer || "None";
}
function getHistoryLength() {
    return `${window.history.length} pages`;
}
function getConnectionType() {
    let connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
    return connection ? connection.effectiveType : "Unavailable";
}

// Battery and Input Info
async function getBatteryStatus() {
    try {
        let battery = await navigator.getBattery();
        return `${Math.round(battery.level * 100)}% - ${battery.charging ? "Charging" : "Not Charging"}`;
    } catch (error) {
        return "Unavailable";
    }
}
function isTouchScreen() {
    return "ontouchstart" in window || navigator.maxTouchPoints > 0 ? "Yes" : "No";
}

// IP and Location
async function getIPAndLocation() {
    try {
        let response = await fetch('https://ipapi.co/json/');
        let data = await response.json();
        document.getElementById('ip').textContent = data.ip;
        document.getElementById('location').textContent = `${data.city}, ${data.region}, ${data.country_name}`;
    } catch (error) {
        document.getElementById('ip').textContent = 'Unavailable';
        document.getElementById('location').textContent = 'Unavailable';
    }
}

// Display All Information
async function displayUserInfo() {
    document.getElementById('os').textContent = detectOS();
    document.getElementById('browser').textContent = detectBrowser();
    document.getElementById('resolution').textContent = getScreenResolution();
    document.getElementById('viewport').textContent = getViewportSize();
    document.getElementById('deviceType').textContent = getDeviceType();
    document.getElementById('language').textContent = getLanguage();
    document.getElementById('timezone').textContent = getTimeZone();
    document.getElementById('memory').textContent = getMemory();
    document.getElementById('cpuCores').textContent = getCpuCores();
    document.getElementById('colorDepth').textContent = getColorDepth();
    document.getElementById('pixelDepth').textContent = getPixelDepth();
    document.getElementById('plugins').textContent = getPlugins();
    document.getElementById('cookiesEnabled').textContent = cookiesEnabled();
    document.getElementById('dnt').textContent = doNotTrack();
    document.getElementById('referrer').textContent = getReferrer();
    document.getElementById('historyLength').textContent = getHistoryLength();
    document.getElementById('connection').textContent = getConnectionType();
    document.getElementById('battery').textContent = await getBatteryStatus();
    document.getElementById('touch').textContent = isTouchScreen();
    await getIPAndLocation();

    // Additional information
    document.getElementById('userAgent').textContent = navigator.userAgent;
    document.getElementById('platform').textContent = navigator.platform;
    document.getElementById('vendor').textContent = navigator.vendor;
    document.getElementById('hardwareConcurrency').textContent = navigator.hardwareConcurrency;
    document.getElementById('deviceMemory').textContent = navigator.deviceMemory;
    document.getElementById('connectivity').textContent = navigator.connection?.effectiveType || 'Unavailable';
    document.getElementById('onLine').textContent = navigator.onLine ? 'Online' : 'Offline';
    document.getElementById('geolocation').textContent = navigator.geolocation ? 'Enabled' : 'Disabled';
}

// Run on load
window.onload = displayUserInfo;