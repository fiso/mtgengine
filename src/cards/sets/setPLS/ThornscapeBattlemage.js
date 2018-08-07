"use strict";
const Constants = require ("../../../Constants");
const ThornscapeBattlemageBase = require("../setMM3/ThornscapeBattlemage");

class ThornscapeBattlemage extends ThornscapeBattlemageBase {
  constructor (game) {
    super(game, "Thornscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = ThornscapeBattlemage;
