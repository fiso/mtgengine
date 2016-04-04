"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FireWhip extends Card {
  constructor(game) {
    super(game, "Fire Whip", "Time Spiral "Timeshifted"", "TSB");
  }
}

module.exports = FireWhip;
