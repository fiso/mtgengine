"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SurvivalCache extends UnimplementedCard {
  constructor (game) {
    super(game, "Survival Cache", "Commander 2013 Edition", "C13");
  }
}

module.exports = SurvivalCache;
