"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThermokarstBase = require("../setICE/Thermokarst.js");

class Thermokarst extends ThermokarstBase {
  constructor(game) {
    super(game, "Thermokarst", "Masters Edition II", "ME2");
  }
}

module.exports = Thermokarst;
