"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicDrain extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Drain", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PsychicDrain;
