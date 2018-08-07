"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicSpear extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Spear", "Betrayers of Kamigawa", "BOK");
  }
}

module.exports = PsychicSpear;
