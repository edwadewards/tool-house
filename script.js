document.documentElement.style.setProperty('overflow', 'auto');

const metaViewport = document.querySelector('meta[name=viewport]');
metaViewport.setAttribute('content', 'height=' + initialHeight + 'px, width=device-width, initial-scale=1.0');