"use strict";
const Constants = require ("../../../Constants");
const MysticSnakeBase = require("../setA25/MysticSnake");

class MysticSnake extends MysticSnakeBase {
  constructor (game) {
    super(game, "Mystic Snake", "Apocalypse", "APC");
  }
}

module.exports = MysticSnake;
