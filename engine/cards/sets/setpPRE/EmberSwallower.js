"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class EmberSwallower extends Card {
  constructor(game) {
    super(game, "Ember Swallower", "Prerelease Events", "pPRE");
  }
}

module.exports = EmberSwallower;
