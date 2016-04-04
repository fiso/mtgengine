"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const SunscapeBattlemageBase = require("../setDDE/SunscapeBattlemage.js");

class SunscapeBattlemage extends SunscapeBattlemageBase {
  constructor(game) {
    super(game, "Sunscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = SunscapeBattlemage;
