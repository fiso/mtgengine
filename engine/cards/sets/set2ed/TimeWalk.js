"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const TimeWalkBase = require("../setCED/TimeWalk.js");

class TimeWalk extends TimeWalkBase {
  constructor(game) {
    super(game, "Time Walk", "Unlimited Edition", "2ED");
  }
}

module.exports = TimeWalk;
