"use strict";
const Constants = require ("../../../Constants");
const MysticSnakeBase = require("../setA25/MysticSnake");

class MysticSnake extends MysticSnakeBase {
  constructor (game) {
    super(game, "Mystic Snake", "Commander 2015", "C15");
  }
}

module.exports = MysticSnake;
