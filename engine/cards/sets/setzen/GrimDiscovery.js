"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class GrimDiscovery extends Card {
  constructor(game) {
    super(game, "Grim Discovery", "Zendikar", "ZEN");
  }
}

module.exports = GrimDiscovery;
