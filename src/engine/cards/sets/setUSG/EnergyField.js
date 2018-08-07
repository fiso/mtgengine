"use strict";
const Constants = require ("../../../Constants");
const EnergyFieldBase = require("../setWC00/EnergyField");

class EnergyField extends EnergyFieldBase {
  constructor (game) {
    super(game, "Energy Field", "Urza's Saga", "USG");
  }
}

module.exports = EnergyField;
