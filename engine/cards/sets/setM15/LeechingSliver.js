"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LeechingSliver extends Card {
  constructor(game) {
    super(game, "Leeching Sliver", "Magic 2015 Core Set", "M15");
  }
}

module.exports = LeechingSliver;
