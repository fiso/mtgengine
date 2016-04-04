"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PsychicVenomBase = require("../set6ED/PsychicVenom.js");

class PsychicVenom extends PsychicVenomBase {
  constructor(game) {
    super(game, "Psychic Venom", "Fourth Edition", "4ED");
  }
}

module.exports = PsychicVenom;
