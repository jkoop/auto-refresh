# auto-refresh

Cache-less-ly checks the `Last-Modified` header of the current page with a `HEAD` request every 5 seconds. If it's different than the `Last-Modified` header of the current page, it causes a cache-less page refresh.

This is useful for things like a simple monitoring system that you changed a setting for and don't want to reach behind the TV to reset your RaspberryPi.

## CDN

```html
<script rel="preconnect dns-prefetch" src="https://static.joekoop.com/auto-refresh/script.js" type="module"></script>
```

## Self-hosted

```html
<script src="path/to/script.js" type="module"></script>
```
