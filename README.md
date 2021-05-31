# auto-refresh

Cache-less-ly checks the `Last-Modified` header of the current page with a `HEAD` request every 5 seconds. If it's different than the `Last-Modified` header of the current page, it causes a cache-less page refresh.

This is useful for things like a very simple monitoring system that you changed a setting for and don't want to reach behind the TV to reset your RaspberryPi.

## CDN

```html
<script src="https://cdn.jsdelivr.net/gh/jkoop/auto-refresh@1.0/script.min.js" type="module"></script>
```

## Self-hosted

```html
<script src="path/to/script.js" type="module"></script>
```

## Options

`data-refresh=""`: optional custom interval in seconds; requires `src=""` to include the substring `auto-refresh`.