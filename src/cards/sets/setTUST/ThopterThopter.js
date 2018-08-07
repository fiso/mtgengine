"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThopterThopter extends UnimplementedCard {
  constructor (game) {
    super(game, "Thopter // Thopter", "Unstable Tokens", "TUST");
  }
}

module.exports = ThopterThopter;
