"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicTheft extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Theft", "Prophecy", "PCY");
  }
}

module.exports = PsychicTheft;
