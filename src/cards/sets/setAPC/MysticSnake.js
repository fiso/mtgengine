"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticSnake extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Snake", "Apocalypse", "APC");
  }
}

module.exports = MysticSnake;
