"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ArcRunner extends Card {
  constructor(game) {
    super(game, "Arc Runner", "Magic 2011", "M11");
  }
}

module.exports = ArcRunner;
