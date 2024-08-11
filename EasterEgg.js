const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "KeyB", "KeyA"
];

let konamiIndex = 0;

document.addEventListener("keydown", function(event) {
    if (event.code === konamiCode[konamiIndex]) {
        konamiIndex++;

        if (konamiIndex === konamiCode.length) {
            activateKonamiCode();
            konamiIndex = 0;
        }
    } else {
        konamiIndex = 0;
    }
});

function activateKonamiCode() {
    // Hide everything in the body
    document.body.innerHTML = '';

    // Create the embed container
    const embedContainer = document.createElement('div');
    embedContainer.id = "embed-container";
    embedContainer.style.position = "fixed";
    embedContainer.style.top = "0";
    embedContainer.style.left = "0";
    embedContainer.style.width = "100%";
    embedContainer.style.height = "100%";
    embedContainer.style.backgroundColor = "black";
    embedContainer.style.zIndex = "9999";
    embedContainer.style.display = "flex";
    embedContainer.style.justifyContent = "center";
    embedContainer.style.alignItems = "center";

    // Create a wrapper for the iframe to center it
    const iframeWrapper = document.createElement('div');
    iframeWrapper.id = "iframe-wrapper";
    iframeWrapper.style.position = "relative";
    iframeWrapper.style.width = "80%"; // Adjust this value as needed
    iframeWrapper.style.height = "80%"; // Adjust this value as needed
    iframeWrapper.style.maxWidth = "560px"; // Max width of the iframe
    iframeWrapper.style.maxHeight = "384px"; // Max height of the iframe
    iframeWrapper.style.overflow = "hidden";

    // Create the iframe
    const iframe = document.createElement('iframe');
    iframe.src = "https://archive.org/embed/doom-play";
    iframe.frameBorder = "0";
    iframe.allowFullscreen = true;
    iframe.setAttribute("webkitallowfullscreen", "true");
    iframe.setAttribute("mozallowfullscreen", "true");

    // Set the iframe size to fill the wrapper
    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "none";

    // Append the iframe to the iframe wrapper
    iframeWrapper.appendChild(iframe);
    // Append the iframe wrapper to the embed container
    embedContainer.appendChild(iframeWrapper);
    // Append the embed container to the body
    document.body.appendChild(embedContainer);

    // Continuously check for the presence of the #canvasholder and #canvas
    iframe.onload = function() {
        const checkCanvasInterval = setInterval(() => {
            const iframeDocument = iframe.contentDocument || iframe.contentWindow.document;
            const canvasHolder = iframeDocument.querySelector('#canvasholder');
            const canvas = iframeDocument.querySelector('#canvas');

            if (canvasHolder && canvas) {
                // Apply the styles once the elements are available
                canvasHolder.style.display = 'flex';
                canvasHolder.style.justifyContent = 'center';
                canvasHolder.style.alignItems = 'center';
                canvasHolder.style.width = '100%';
                canvasHolder.style.height = '100%';

                canvas.style.maxWidth = '100%';
                canvas.style.maxHeight = '100%';
                canvas.style.imageRendering = 'pixelated';

                // Stop checking once the elements are styled
                clearInterval(checkCanvasInterval);
            }
        }, 500); // Check every 500ms
    };
}
