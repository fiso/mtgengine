"use strict";
const Constants = require ("../../../Constants");
const SnakeBase = require("../setTHOU/Snake");

class Snake extends SnakeBase {
  constructor (game) {
    super(game, "Snake", "Commander 2015 Tokens", "TC15");
  }
}

module.exports = Snake;
