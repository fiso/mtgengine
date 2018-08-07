"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicRebuttal extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Rebuttal", "Magic Origins", "ORI");
  }
}

module.exports = PsychicRebuttal;
