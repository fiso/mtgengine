"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LimitedResources extends Card {
  constructor(game) {
    super(game, "Limited Resources", "Exodus", "EXO");
  }
}

module.exports = LimitedResources;
