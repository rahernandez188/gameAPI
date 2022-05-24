# Game API take-home

## Prerequisites

- Node.js 16.14.0
- Docker & docker-compose (User must be able to run `docker` without using `sudo`)

## Build docker images

Docker images game:app and game:microservice are required to run Game API. To build the images, run this command:
```
bash build.sh
```
You can check the images with the command `docker image ls`.

## Run Game API

To run the API, run this command
```
docker-compose up
```

Optionally, you can use the option `-d` to run containers in the background.

## API endpoints

These endpoints allow you to handle the games.

- `GET /game/:id`: Gets the game with the specified id.
- `POST /game`: Adds a new game.
- `PUT /game/:id`: Updates the game with the specified id.
- `DELETE /game/:id`: Deletes the game with the specified id.
- `GET /game/:id/publisher`: Gets the game's publisher info. The game is specified with the id.
- `POST /game/retire`: Removes the games having a release date older than 18 months and applies a discount of 20% to all games having a release date between 12 and 18 months.

### GET /game/:id

Gets the game with the specified id. The id is and integer greater than 0.

**Response**
```
// Game was found
{
    "id": 2,
    "title": "Example game",
    "price": 1000,
    "publisher": {
        "id": 3,
        "name": "Example publisher",
        "siret": "74185293",
        "phone": "7418529630"
    }
    "tags": "example, game",
    "releaseDate": "2022-01-05T00:00:00.000Z"
}

//Game was not found, 404 NOT FOUND returned
{
    "id": 0,
    "title": "",
    "price": 0,
    "publisher": {
        "id": 0,
        "name": "",
        "siret": "",
        "phone": ""
    },
    "tags": "",
    "releaseDate": "1000-01-01 00:00:00Z"
}
```

### GET /game/:id/publisher

Gets the game's publisher info. The game is specified with the id.

**Response**
```
// Game id was found
{
    "id": 3,
    "name": "Example publisher",
    "siret": "74185293",
    "phone": "7418529630"
}

//Game id was not found, 404 NOT FOUND returned
{
    "id": 0,
    "name": "",
    "phone": "",
    "siret": ""
}
```


### POST /game

Adds a new game.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `title` | required | string  | Name of the game  |
|     `price` | required | number  | Price of the game |
|     `tags`  | required | string  | Tags associated to the game |
|     `publisher` | required | number  | Game publisher id, previously stored |
|     `releaseDate` | required | string  | Game release date in datetime format YYYY-MM-DD HH:mm:SS |

**Response**

```
{
    "identifiers": [
        {
            "id": 13
        }
    ],
    "generatedMaps": [
        {
            "id": 13,
            "releaseDate": "2019-02-16T14:14:14.000Z"
        }
    ],
    "raw": {
        "fieldCount": 0,
        "affectedRows": 1,
        "insertId": 13,
        "info": "",
        "serverStatus": 2,
        "warningStatus": 0
    }
}
```

### PUT /game/id
Updates a game. The id is and integer greater than 0 and previously stored with the `GET /game/:id` endpoint.

**Parameters**

|          Name | Required |  Type   | Description                                                                                                                                                           |
| -------------:|:--------:|:-------:| --------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
|     `title` | optional | string  | Name of the game  |
|     `price` | optional | number  | Price of the game |
|     `tags`  | optional | string  | Tags associated to the game |
|     `publisher` | optional | number  | Game publisher id, previously stored |
|     `releaseDate` | optional | string  | Game release date in datetime format YYYY-MM-DD HH:mm:SS |

**Response**

```
{
    "generatedMaps": [],
    "raw": [],
    "affected": 1
}
```

### DELETE /game/:id

Deletes a game. The id is and integer greater than 0 and previously stored with the `GET /game/:id` endpoint.

**Response**

```
{
    "raw": [],
    "affected": 1
}
```

### POST /game/retire
Removes the games having a release date older than 18 months and applies a discount of 20% to all games having a release date between 12 and 18 months. No validation of previous discounts is made.

**Response**

```
{
    "resultDelete": {
        "raw": [],
        "affected": 12
    },
    "resultDiscount": {
        "generatedMaps": [],
        "raw": [],
        "affected": 0
    }
}
```

