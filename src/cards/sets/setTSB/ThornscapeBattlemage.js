"use strict";
const Constants = require ("../../../Constants");
const ThornscapeBattlemageBase = require("../setDDE/ThornscapeBattlemage");

class ThornscapeBattlemage extends ThornscapeBattlemageBase {
  constructor(game) {
    super(game, "Thornscape Battlemage", "Time Spiral \"Timeshifted\"", "TSB");
  }
}

module.exports = ThornscapeBattlemage;
