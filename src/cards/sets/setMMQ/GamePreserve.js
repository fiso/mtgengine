"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GamePreserve extends UnimplementedCard {
  constructor(game) {
    super(game, "Game Preserve", "Mercadian Masques", "MMQ");
  }
}

module.exports = GamePreserve;
