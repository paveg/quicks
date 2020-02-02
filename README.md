# Quicks

This repository is a quick starting web application which composed Rails API server + React (Re-ducks). 

## Quick Start

```bash
$ docker-compose build

# app database creation
$ docker-compose run --rm rails rake db:create
$ docker-compose up # rails server port 3000

# front
$ npm run start # client port 3001
```

## Technical Stacks

|      name| version|
|----------|--------|
|      Ruby|   2.6.5|
|     Rails|   6.0.2|
|     MySQL|  8.0.19|
|     React|  16.2.0|
|TypeScript|   3.7.5|
