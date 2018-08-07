"use strict";
const Constants = require ("../../../Constants");
const PegasusChargerBase = require("../set9ED/PegasusCharger");

class PegasusCharger extends PegasusChargerBase {
  constructor (game) {
    super(game, "Pegasus Charger", "Anthologies", "ATH");
  }
}

module.exports = PegasusCharger;
