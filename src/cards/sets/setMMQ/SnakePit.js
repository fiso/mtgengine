"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SnakePit extends UnimplementedCard {
  constructor(game) {
    super(game, "Snake Pit", "Mercadian Masques", "MMQ");
  }
}

module.exports = SnakePit;
