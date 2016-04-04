"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SafeHavenBase = require("../setCHR/SafeHaven.js");

class SafeHaven extends SafeHavenBase {
  constructor(game) {
    super(game, "Safe Haven", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = SafeHaven;
