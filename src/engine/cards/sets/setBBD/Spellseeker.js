"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Spellseeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Spellseeker", "Battlebond", "BBD");
  }
}

module.exports = Spellseeker;
