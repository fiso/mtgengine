"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PsychicVenom extends Card {
  constructor(game) {
    super(game, "Psychic Venom", "Classic Sixth Edition", "6ED");
  }
}

module.exports = PsychicVenom;
