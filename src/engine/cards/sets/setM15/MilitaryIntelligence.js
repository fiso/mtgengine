"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MilitaryIntelligence extends UnimplementedCard {
  constructor (game) {
    super(game, "Military Intelligence", "Magic 2015", "M15");
  }
}

module.exports = MilitaryIntelligence;
