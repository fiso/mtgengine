"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeWalkBase = require("../setCED/TimeWalk.js");

class TimeWalk extends TimeWalkBase {
  constructor(game) {
    super(game, "Time Walk", "Limited Edition Beta", "LEB");
  }
}

module.exports = TimeWalk;
