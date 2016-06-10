"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasureHunter extends UnimplementedCard {
  constructor (game) {
    super(game, "Treasure Hunter", "Exodus", "EXO");
  }
}

module.exports = TreasureHunter;
