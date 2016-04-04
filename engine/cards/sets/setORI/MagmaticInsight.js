"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MagmaticInsight extends Card {
  constructor(game) {
    super(game, "Magmatic Insight", "Magic Origins", "ORI");
  }
}

module.exports = MagmaticInsight;
