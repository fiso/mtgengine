"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RepelIntruders extends Card {
  constructor(game) {
    super(game, "Repel Intruders", "Shadowmoor", "SHM");
  }
}

module.exports = RepelIntruders;
