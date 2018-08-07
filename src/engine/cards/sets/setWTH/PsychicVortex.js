"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PsychicVortex extends UnimplementedCard {
  constructor (game) {
    super(game, "Psychic Vortex", "Weatherlight", "WTH");
  }
}

module.exports = PsychicVortex;
