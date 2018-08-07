"use strict";
const Constants = require ("../../../Constants");
const StormscapeFamiliarBase = require("../setTSB/StormscapeFamiliar");

class StormscapeFamiliar extends StormscapeFamiliarBase {
  constructor (game) {
    super(game, "Stormscape Familiar", "Planeshift", "PLS");
  }
}

module.exports = StormscapeFamiliar;
