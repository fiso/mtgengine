"use strict";
const Constants = require ("../../../Constants");
const MysticSnakeBase = require("../setA25/MysticSnake");

class MysticSnake extends MysticSnakeBase {
  constructor (game) {
    super(game, "Mystic Snake", "Modern Masters 2015", "MM2");
  }
}

module.exports = MysticSnake;
