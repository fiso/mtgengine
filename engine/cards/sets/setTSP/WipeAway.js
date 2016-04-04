"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WipeAway extends Card {
  constructor(game) {
    super(game, "Wipe Away", "Time Spiral", "TSP");
  }
}

module.exports = WipeAway;
