#!/bin/bash
cd game_app
docker build -t game:app . 
cd ../game_microservice
docker build -t game:microservice .
cd ..