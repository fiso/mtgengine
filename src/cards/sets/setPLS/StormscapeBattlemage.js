"use strict";
const Constants = require ("../../../Constants");
const StormscapeBattlemageBase = require("../setC13/StormscapeBattlemage");

class StormscapeBattlemage extends StormscapeBattlemageBase {
  constructor (game) {
    super(game, "Stormscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = StormscapeBattlemage;
