"use strict";
const Constants = require ("../../../Constants");
const ThunderscapeBattlemageBase = require("../setDDE/ThunderscapeBattlemage");

class ThunderscapeBattlemage extends ThunderscapeBattlemageBase {
  constructor(game) {
    super(game, "Thunderscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = ThunderscapeBattlemage;
