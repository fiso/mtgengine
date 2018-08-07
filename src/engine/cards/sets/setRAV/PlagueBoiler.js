"use strict";
const Constants = require ("../../../Constants");
const PlagueBoilerBase = require("../setC13/PlagueBoiler");

class PlagueBoiler extends PlagueBoilerBase {
  constructor (game) {
    super(game, "Plague Boiler", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = PlagueBoiler;
