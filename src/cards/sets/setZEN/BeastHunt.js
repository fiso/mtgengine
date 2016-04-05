"use strict";
const Constants = require ("../../../Constants");
const BeastHuntBase = require("../setHOP/BeastHunt");

class BeastHunt extends BeastHuntBase {
  constructor(game) {
    super(game, "Beast Hunt", "Zendikar", "ZEN");
  }
}

module.exports = BeastHunt;
