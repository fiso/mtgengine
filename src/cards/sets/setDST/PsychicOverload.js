"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicOverload extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Overload", "Darksteel", "DST");
  }
}

module.exports = PsychicOverload;
