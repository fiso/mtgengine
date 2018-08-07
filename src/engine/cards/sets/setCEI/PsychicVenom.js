"use strict";
const Constants = require ("../../../Constants");
const PsychicVenomBase = require("../setMED/PsychicVenom");

class PsychicVenom extends PsychicVenomBase {
  constructor (game) {
    super(game, "Psychic Venom", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = PsychicVenom;
