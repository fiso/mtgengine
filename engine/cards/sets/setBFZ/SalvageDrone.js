"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SalvageDrone extends Card {
  constructor(game) {
    super(game, "Salvage Drone", "Battle for Zendikar", "BFZ");
  }
}

module.exports = SalvageDrone;
