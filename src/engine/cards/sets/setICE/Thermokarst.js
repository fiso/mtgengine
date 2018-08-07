"use strict";
const Constants = require ("../../../Constants");
const ThermokarstBase = require("../setME2/Thermokarst");

class Thermokarst extends ThermokarstBase {
  constructor (game) {
    super(game, "Thermokarst", "Ice Age", "ICE");
  }
}

module.exports = Thermokarst;
