"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AggressiveMining extends UnimplementedCard {
  constructor (game) {
    super(game, "Aggressive Mining", "Magic 2015 Core Set", "M15");
  }
}

module.exports = AggressiveMining;
