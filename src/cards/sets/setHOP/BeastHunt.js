"use strict";
const Constants = require ("../../../Constants");
const BeastHuntBase = require("../setZEN/BeastHunt");

class BeastHunt extends BeastHuntBase {
  constructor (game) {
    super(game, "Beast Hunt", "Planechase", "HOP");
  }
}

module.exports = BeastHunt;
