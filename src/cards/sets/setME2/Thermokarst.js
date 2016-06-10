"use strict";
const Constants = require ("../../../Constants");
const ThermokarstBase = require("../setICE/Thermokarst");

class Thermokarst extends ThermokarstBase {
  constructor (game) {
    super(game, "Thermokarst", "Masters Edition II", "ME2");
  }
}

module.exports = Thermokarst;
