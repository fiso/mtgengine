"use strict";
const Constants = require ("../../../Constants");
const StormscapeFamiliarBase = require("../setPLS/StormscapeFamiliar");

class StormscapeFamiliar extends StormscapeFamiliarBase {
  constructor(game) {
    super(game, "Stormscape Familiar", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = StormscapeFamiliar;
