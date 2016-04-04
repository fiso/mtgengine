"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsychicVenomBase = require("../set6ED/PsychicVenom.js");

class PsychicVenom extends PsychicVenomBase {
  constructor(game) {
    super(game, "Psychic Venom", "International Collector's Edition", "CEI");
  }
}

module.exports = PsychicVenom;
