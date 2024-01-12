// window-open-lib.js

class WindowOpenLib {
  constructor() {
    this.openedWindows = [];
  }

  open(url, options = {}) {
    const defaultOptions = {
      width: 800,
      height: 600,
      left: window.screenX + (window.outerWidth - 800) / 2,
      top: window.screenY + (window.outerHeight - 600) / 2,
      ...options,
    };

    const openedWindow = window.open(url, '_blank', this._serializeOptions(defaultOptions));
    if (openedWindow) {
      this.openedWindows.push(openedWindow);
    }

    return openedWindow;
  }

  closeAll() {
    this.openedWindows.forEach((window) => {
      window.close();
    });

    this.openedWindows = [];
  }

  _serializeOptions(options) {
    return Object.entries(options)
      .map(([key, value]) => `${key}=${value}`)
      .join(',');
  }
}

module.exports = WindowOpenLib;
