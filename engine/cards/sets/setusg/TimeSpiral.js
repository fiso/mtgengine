"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimeSpiral extends Card {
  constructor(game) {
    super(game, "Time Spiral", "Urza's Saga", "USG");
  }
}

module.exports = TimeSpiral;
