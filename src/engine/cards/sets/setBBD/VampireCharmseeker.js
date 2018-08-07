"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VampireCharmseeker extends UnimplementedCard {
  constructor (game) {
    super(game, "Vampire Charmseeker", "Battlebond", "BBD");
  }
}

module.exports = VampireCharmseeker;
