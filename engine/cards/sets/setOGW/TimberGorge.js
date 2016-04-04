"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TimberGorge extends Card {
  constructor(game) {
    super(game, "Timber Gorge", "Oath of the Gatewatch", "OGW");
  }
}

module.exports = TimberGorge;
