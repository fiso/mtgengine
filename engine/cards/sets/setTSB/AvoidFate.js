"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const AvoidFateBase = require("../setLEG/AvoidFate.js");

class AvoidFate extends AvoidFateBase {
  constructor(game) {
    super(game, "Avoid Fate", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = AvoidFate;
