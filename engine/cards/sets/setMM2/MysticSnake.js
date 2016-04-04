"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const MysticSnakeBase = require("../setAPC/MysticSnake.js");

class MysticSnake extends MysticSnakeBase {
  constructor(game) {
    super(game, "Mystic Snake", "Modern Masters 2015 Edition", "MM2");
  }
}

module.exports = MysticSnake;
