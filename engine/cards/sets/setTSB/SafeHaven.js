"use strict";
const Constants = require ("../../../Constants");
const SafeHavenBase = require("../setCHR/SafeHaven");

class SafeHaven extends SafeHavenBase {
  constructor(game) {
    super(game, "Safe Haven", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SafeHaven;
