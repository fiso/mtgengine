"use strict";
const Constants = require ("../../../Constants");
const SnakeBase = require("../setTHOU/Snake");

class Snake extends SnakeBase {
  constructor (game) {
    super(game, "Snake", "Khans of Tarkir Tokens", "TKTK");
  }
}

module.exports = Snake;
