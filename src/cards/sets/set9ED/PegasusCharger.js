"use strict";
const Constants = require ("../../../Constants");
const PegasusChargerBase = require("../setATH/PegasusCharger");

class PegasusCharger extends PegasusChargerBase {
  constructor (game) {
    super(game, "Pegasus Charger", "Ninth Edition", "9ED");
  }
}

module.exports = PegasusCharger;
