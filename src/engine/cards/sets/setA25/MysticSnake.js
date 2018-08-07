"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MysticSnake extends UnimplementedCard {
  constructor (game) {
    super(game, "Mystic Snake", "Masters 25", "A25");
  }
}

module.exports = MysticSnake;
