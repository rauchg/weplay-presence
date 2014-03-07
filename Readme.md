
# weplay-presence

Small script that aggregates the count of connected clients from
each weplay server and broadcasts it.

## How to install

```bash
$ npm install
```

And run it with the following ENV vars:

- `WEPLAY_REDIS` - redis uri (`localhost:6379`)
- `WEPLAY_INTERVAL` - how often we update clients on the total
  number of connected peers. We use an interval to avoid client slowdowns
  when too many clients connect at once (`5000`)

```bash
$ node index
```

## License

MIT
