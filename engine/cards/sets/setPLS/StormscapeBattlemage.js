"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const StormscapeBattlemageBase = require("../setC13/StormscapeBattlemage.js");

class StormscapeBattlemage extends StormscapeBattlemageBase {
  constructor(game) {
    super(game, "Stormscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = StormscapeBattlemage;
