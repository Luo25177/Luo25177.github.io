document.oncontextmenu = function () {
  showNotification("为了有更好的体验，本站禁用右键", 1000);
  return false;
};

function showNotification(message, duration) {
  var notification = document.createElement('div');
  notification.className = 'notification';
  notification.textContent = message;
  document.body.appendChild(notification);
  setTimeout(function () {
    notification.style.opacity = 0;
    setTimeout(function () {
      document.body.removeChild(notification);
    }, 1000);
  }, duration);
}
