"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicTrance extends UnimplementedCard {
  constructor(game) {
    super(game, "Psychic Trance", "Onslaught", "ONS");
  }
}

module.exports = PsychicTrance;
