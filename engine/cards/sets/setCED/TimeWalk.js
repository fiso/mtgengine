"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeWalk extends Card {
  constructor(game) {
    super(game, "Time Walk", "Collector's Edition", "CED");
  }
}

module.exports = TimeWalk;
