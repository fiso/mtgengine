"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticSnakeBase = require("../setAPC/MysticSnake.js");

class MysticSnake extends MysticSnakeBase {
  constructor(game) {
    super(game, "Mystic Snake", "Commander 2015", "C15");
  }
}

module.exports = MysticSnake;
