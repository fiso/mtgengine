"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HuntersInsight extends UnimplementedCard {
  constructor (game) {
    super(game, "Hunter's Insight", "Magic 2012", "M12");
  }
}

module.exports = HuntersInsight;
