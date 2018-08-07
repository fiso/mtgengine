"use strict";
const Constants = require ("../../../Constants");
const TimeWalkBase = require("../setVMA/TimeWalk");

class TimeWalk extends TimeWalkBase {
  constructor (game) {
    super(game, "Time Walk", "Intl. Collectors’ Edition", "CEI");
  }
}

module.exports = TimeWalk;
