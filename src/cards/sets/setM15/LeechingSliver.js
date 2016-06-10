"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeechingSliver extends UnimplementedCard {
  constructor (game) {
    super(game, "Leeching Sliver", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LeechingSliver;
