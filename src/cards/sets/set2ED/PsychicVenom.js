"use strict";
const Constants = require ("../../../Constants");
const PsychicVenomBase = require("../set6ED/PsychicVenom");

class PsychicVenom extends PsychicVenomBase {
  constructor (game) {
    super(game, "Psychic Venom", "Unlimited Edition", "2ED");
  }
}

module.exports = PsychicVenom;
