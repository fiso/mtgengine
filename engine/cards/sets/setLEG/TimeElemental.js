"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeElementalBase = require("../set5ED/TimeElemental.js");

class TimeElemental extends TimeElementalBase {
  constructor(game) {
    super(game, "Time Elemental", "Legends", "LEG");
  }
}

module.exports = TimeElemental;
