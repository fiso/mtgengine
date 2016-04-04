"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FelidarSovereign extends Card {
  constructor(game) {
    super(game, "Felidar Sovereign", "Battle for Zendikar", "BFZ");
  }
}

module.exports = FelidarSovereign;
