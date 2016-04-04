"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const ThornscapeBattlemageBase = require("../setDDE/ThornscapeBattlemage.js");

class ThornscapeBattlemage extends ThornscapeBattlemageBase {
  constructor(game) {
    super(game, "Thornscape Battlemage", "Planeshift", "PLS");
  }
}

module.exports = ThornscapeBattlemage;
