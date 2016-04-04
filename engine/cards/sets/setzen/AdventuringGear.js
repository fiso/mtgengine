"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AdventuringGear extends Card {
  constructor(game) {
    super(game, "Adventuring Gear", "Zendikar", "ZEN");
  }
}

module.exports = AdventuringGear;
