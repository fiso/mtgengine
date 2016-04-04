"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class HazeFrog extends Card {
  constructor(game) {
    super(game, "Haze Frog", "Rise of the Eldrazi", "ROE");
  }
}

module.exports = HazeFrog;
