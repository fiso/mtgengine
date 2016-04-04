"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SweepAway extends Card {
  constructor(game) {
    super(game, "Sweep Away", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = SweepAway;
