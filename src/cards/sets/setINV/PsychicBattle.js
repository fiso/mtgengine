"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicBattle extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Battle", "Invasion", "INV");
  }
}

module.exports = PsychicBattle;
