"use strict";
const Constants = require ("../../../Constants");
const CoalitionRelicBase = require("../setDDE/CoalitionRelic");

class CoalitionRelic extends CoalitionRelicBase {
  constructor(game) {
    super(game, "Coalition Relic", "Future Sight", "FUT");
  }
}

module.exports = CoalitionRelic;
