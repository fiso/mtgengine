"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SquireBase = require("../setDRK/Squire.js");

class Squire extends SquireBase {
  constructor(game) {
    super(game, "Squire", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Squire;
