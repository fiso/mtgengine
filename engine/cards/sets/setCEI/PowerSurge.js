"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const PowerSurgeBase = require("../setCED/PowerSurge.js");

class PowerSurge extends PowerSurgeBase {
  constructor(game) {
    super(game, "Power Surge", "International Collector's Edition", "CEI");
  }
}

module.exports = PowerSurge;
