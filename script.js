function debounce(callback, delay, immediate = false) {
  let timeoutId;

  return function debounced(...args) {
    const context = this;

    function delayedCallback() {
      if (!immediate) {
        callback.apply(context, args);
      }
      timeoutId = null;
    }

    const shouldCallImmediately = immediate && timeoutId === undefined;

    clearTimeout(timeoutId);
    timeoutId = setTimeout(delayedCallback, delay);

    if (shouldCallImmediately) {
      callback.apply(context, args);
    }
  };
}
