"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TowerDefense extends Card {
  constructor(game) {
    super(game, "Tower Defense", "Gatecrash", "GTC");
  }
}

module.exports = TowerDefense;
