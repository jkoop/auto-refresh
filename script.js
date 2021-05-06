var h = new Headers();
h.append('pragma', 'no-cache');
h.append('cache-control', 'no-cache');

setInterval(()=>{
    fetch(document.location.href, {
        method: 'HEAD',
        headers: h,
    }).then((r) => {
        if(new Date(r.headers.get("Last-Modified")).getTime() > new Date(document.lastModified).getTime()){
            location.reload(true);
        }
    });
}, 5000);
