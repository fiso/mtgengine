"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticSnakeBase = require("../setAPC/MysticSnake.js");

class MysticSnake extends MysticSnakeBase {
  constructor(game) {
    super(game, "Mystic Snake", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = MysticSnake;
