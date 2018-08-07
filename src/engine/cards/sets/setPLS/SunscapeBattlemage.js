"use strict";
const Constants = require ("../../../Constants");
const SunscapeBattlemageBase = require("../setDDE/SunscapeBattlemage");

class SunscapeBattlemage extends SunscapeBattlemageBase {
  constructor (game) {
    super(game, "Sunscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = SunscapeBattlemage;
