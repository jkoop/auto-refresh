var h = new Headers();
h.append('pragma', 'no-cache');
h.append('cache-control', 'no-cache');
var i = document.querySelector('[src*="auto-refresh"]');
if(i !== undefined) i = i.getAttribute("data-interval") * 1000;

setInterval(()=>{
    fetch(document.location.href, {
        method: 'HEAD',
        headers: h,
    }).then((r) => {
        if(new Date(r.headers.get("Last-Modified")).getTime() > new Date(document.lastModified).getTime()){
            location.reload(true);
        }
    });
}, i ?? 5000);
