"use strict";
const Constants = require ("../../../Constants");
const SnakeBase = require("../setTHOU/Snake");

class Snake extends SnakeBase {
  constructor (game) {
    super(game, "Snake", "Amonkhet Tokens", "TAKH");
  }
}

module.exports = Snake;
