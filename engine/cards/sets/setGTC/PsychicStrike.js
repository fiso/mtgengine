"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicStrike extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Strike", "Gatecrash", "GTC");
  }
}

module.exports = PsychicStrike;
