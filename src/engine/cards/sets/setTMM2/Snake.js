"use strict";
const Constants = require ("../../../Constants");
const SnakeBase = require("../setTHOU/Snake");

class Snake extends SnakeBase {
  constructor (game) {
    super(game, "Snake", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Snake;
