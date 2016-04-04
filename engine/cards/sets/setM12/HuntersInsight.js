"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HuntersInsight extends Card {
  constructor(game) {
    super(game, "Hunter's Insight", "Magic 2012", "M12");
  }
}

module.exports = HuntersInsight;
