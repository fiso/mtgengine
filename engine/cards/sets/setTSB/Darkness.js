"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const DarknessBase = require("../setLEG/Darkness.js");

class Darkness extends DarknessBase {
  constructor(game) {
    super(game, "Darkness", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Darkness;
