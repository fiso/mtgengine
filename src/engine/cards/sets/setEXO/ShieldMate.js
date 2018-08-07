"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ShieldMate extends UnimplementedCard {
  constructor (game) {
    super(game, "Shield Mate", "Exodus", "EXO");
  }
}

module.exports = ShieldMate;
