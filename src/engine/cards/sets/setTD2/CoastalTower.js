"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CoastalTower extends UnimplementedCard {
  constructor (game) {
    super(game, "Coastal Tower", "Duel Decks: Mirrodin Pure vs. New Phyrexia", "TD2");
  }
}

module.exports = CoastalTower;
