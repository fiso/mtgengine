"use strict";
const Constants = require ("../../../Constants");
const MysticSnakeBase = require("../setAPC/MysticSnake");

class MysticSnake extends MysticSnakeBase {
  constructor(game) {
    super(game, "Mystic Snake", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MysticSnake;
