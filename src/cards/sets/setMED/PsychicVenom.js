"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicVenom extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Venom", "Masters Edition", "MED");
  }
}

module.exports = PsychicVenom;
