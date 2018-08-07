"use strict";
const Constants = require ("../../../Constants");
const SnakeBase = require("../setTHOU/Snake");

class Snake extends SnakeBase {
  constructor (game) {
    super(game, "Snake", "Journey into Nyx Tokens", "TJOU");
  }
}

module.exports = Snake;
