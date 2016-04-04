"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PlagueBoilerBase = require("../setC13/PlagueBoiler.js");

class PlagueBoiler extends PlagueBoilerBase {
  constructor(game) {
    super(game, "Plague Boiler", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PlagueBoiler;
