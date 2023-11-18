const promise = import('https://openfpcdn.io/fingerprintjs/v4')
.then(fp => fp.load())

promise
.then(fp => fp.get())
.then(res => {
  const now = new Date();
  now.setTime(now.getTime() + 1 * 3600 * 1000);

  const urls = [new URL('https://youcan.shop'), new URL(window.location)]
  urls.forEach(u => document.cookie = `_ycfp=${res.visitorId}; expires=${now.toUTCString()}; path=/; domain=${u.hostname};`)
})

!function (f, b, e, v, n, t, s) {
    if (f.fbq) return;
    n = f.fbq = function () {
        n.callMethod ?
            n.callMethod.apply(n, arguments) : n.queue.push(arguments)
    };
    if (!f._fbq) f._fbq = n;
    n.push = n;
    n.loaded = !0;
    n.version = '2.0';
    n.queue = [];
    t = b.createElement(e);
    t.async = !0;
    t.src = v;
    s = b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t, s)
  }(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '1499686890561168');
    fbq('track', 'PageView');



    window.Dotshop.font = {
        body: {
          value: ''
        },
        menu: {
          value: ''
        }
      };
  
      initFonts();


     
      

      

   