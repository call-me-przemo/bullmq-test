# Bullmq test

This repo contains sample job processing scripts implemented using [bullmq](https://bullmq.io/) along with [redis](https://redis.io) container config, created for testing purposes.

## Usage

1. Start redis container

```sh
docker compose up -d
```

2. Start worker

```sh
pnpm worker
```

3. Schedule job

```sh
pnpm scheduler {message} {timeout}
```
