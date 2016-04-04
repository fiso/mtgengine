"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PegasusChargerBase = require("../setATH/PegasusCharger.js");

class PegasusCharger extends PegasusChargerBase {
  constructor(game) {
    super(game, "Pegasus Charger", "Urza's Saga", "USG");
  }
}

module.exports = PegasusCharger;
