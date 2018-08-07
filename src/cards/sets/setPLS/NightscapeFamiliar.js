"use strict";
const Constants = require ("../../../Constants");
const NightscapeFamiliarBase = require("../setE01/NightscapeFamiliar");

class NightscapeFamiliar extends NightscapeFamiliarBase {
  constructor (game) {
    super(game, "Nightscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = NightscapeFamiliar;
