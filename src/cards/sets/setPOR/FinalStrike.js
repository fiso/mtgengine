"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FinalStrike extends UnimplementedCard {
  constructor (game) {
    super(game, "Final Strike", "Portal", "POR");
  }
}

module.exports = FinalStrike;
