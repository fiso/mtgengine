"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const CoalitionRelicBase = require("../setDDE/CoalitionRelic.js");

class CoalitionRelic extends CoalitionRelicBase {
  constructor(game) {
    super(game, "Coalition Relic", "Future Sight", "FUT");
  }
}

module.exports = CoalitionRelic;
