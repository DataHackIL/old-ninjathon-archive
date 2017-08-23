#!/bin/bash

# build project
cd ninjathon
yarn

# initialize server
screen -dm yarn deploy
exit;
