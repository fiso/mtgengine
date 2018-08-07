"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AggressiveMining extends UnimplementedCard {
  constructor (game) {
    super(game, "Aggressive Mining", "Magic 2015", "M15");
  }
}

module.exports = AggressiveMining;
