"use strict";
const Constants = require ("../../../Constants");
const TimeElementalBase = require("../set5ED/TimeElemental");

class TimeElemental extends TimeElementalBase {
  constructor (game) {
    super(game, "Time Elemental", "Legends", "LEG");
  }
}

module.exports = TimeElemental;
