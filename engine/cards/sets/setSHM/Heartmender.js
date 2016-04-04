"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Heartmender extends Card {
  constructor(game) {
    super(game, "Heartmender", "Shadowmoor", "SHM");
  }
}

module.exports = Heartmender;
