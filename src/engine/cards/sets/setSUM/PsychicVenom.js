"use strict";
const Constants = require ("../../../Constants");
const PsychicVenomBase = require("../setMED/PsychicVenom");

class PsychicVenom extends PsychicVenomBase {
  constructor (game) {
    super(game, "Psychic Venom", "Summer Magic / Edgar", "SUM");
  }
}

module.exports = PsychicVenom;
