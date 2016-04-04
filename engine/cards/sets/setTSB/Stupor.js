"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StuporBase = require("../setpARL/Stupor.js");

class Stupor extends StuporBase {
  constructor(game) {
    super(game, "Stupor", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = Stupor;
