"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurvivalCache extends UnimplementedCard {
  constructor (game) {
    super(game, "Survival Cache", "Iconic Masters", "IMA");
  }
}

module.exports = SurvivalCache;
