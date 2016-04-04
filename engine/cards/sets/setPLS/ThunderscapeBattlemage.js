"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThunderscapeBattlemageBase = require("../setDDE/ThunderscapeBattlemage.js");

class ThunderscapeBattlemage extends ThunderscapeBattlemageBase {
  constructor(game) {
    super(game, "Thunderscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = ThunderscapeBattlemage;
