"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MysticSnake extends Card {
  constructor(game) {
    super(game, "Mystic Snake", "Apocalypse", "APC");
  }
}

module.exports = MysticSnake;
