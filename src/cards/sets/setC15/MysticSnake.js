"use strict";
const Constants = require ("../../../Constants");
const MysticSnakeBase = require("../setAPC/MysticSnake");

class MysticSnake extends MysticSnakeBase {
  constructor(game) {
    super(game, "Mystic Snake", "Commander 2015", "C15");
  }
}

module.exports = MysticSnake;
