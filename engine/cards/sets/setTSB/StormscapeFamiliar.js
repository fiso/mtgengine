"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormscapeFamiliarBase = require("../setPLS/StormscapeFamiliar.js");

class StormscapeFamiliar extends StormscapeFamiliarBase {
  constructor(game) {
    super(game, "Stormscape Familiar", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = StormscapeFamiliar;
