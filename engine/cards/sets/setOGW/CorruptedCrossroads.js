"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class CorruptedCrossroads extends Card {
  constructor(game) {
    super(game, "Corrupted Crossroads", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = CorruptedCrossroads;
