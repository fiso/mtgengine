"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThrilloftheHunt extends Card {
  constructor(game) {
    super(game, "Thrill of the Hunt", "Time Spiral", "TSP");
  }
}

module.exports = ThrilloftheHunt;
