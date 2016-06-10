"use strict";
const Constants = require ("../../../Constants");
const TimeElementalBase = require("../set5ED/TimeElemental");

class TimeElemental extends TimeElementalBase {
  constructor (game) {
    super(game, "Time Elemental", "Fourth Edition", "4ED");
  }
}

module.exports = TimeElemental;
