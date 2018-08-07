"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SiegeBehemoth extends UnimplementedCard {
  constructor (game) {
    super(game, "Siege Behemoth", "Commander Anthology", "CMA");
  }
}

module.exports = SiegeBehemoth;
