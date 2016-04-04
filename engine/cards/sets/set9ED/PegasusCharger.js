"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PegasusChargerBase = require("../setATH/PegasusCharger.js");

class PegasusCharger extends PegasusChargerBase {
  constructor(game) {
    super(game, "Pegasus Charger", "Ninth Edition", "9ED");
  }
}

module.exports = PegasusCharger;
