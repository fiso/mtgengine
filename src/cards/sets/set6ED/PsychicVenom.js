"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicVenom extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Venom", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PsychicVenom;
