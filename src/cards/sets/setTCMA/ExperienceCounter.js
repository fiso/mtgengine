"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ExperienceCounter extends UnimplementedCard {
  constructor (game) {
    super(game, "Experience Counter", "Commander Anthology Tokens", "TCMA");
  }
}

module.exports = ExperienceCounter;
