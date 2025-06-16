const userAgent = navigator.userAgent;
if (userAgent.includes("Chrome") && !userAgent.includes("Edg") && !userAgent.includes("OPR")) {
    renderingEngine = "WebKit";
} else if (userAgent.includes("Firefox")) {
    renderingEngine = "Gecko";
} else if (userAgent.includes("Safari") && !userAgent.includes("Chrome")) {
    renderingEngine = "WebKit";
} else if (userAgent.includes("Edg")) {
    renderingEngine = "Blink";
} else if (userAgent.includes("OPR") || userAgent.includes("Opera")) {
    renderingEngine = "Blink";
}
var engineDiv = document.getElementById("engine");
engineDiv.innerText = `Rendering Engine: ${renderingEngine}`;