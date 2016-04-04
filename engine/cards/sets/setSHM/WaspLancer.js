"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WaspLancer extends Card {
  constructor(game) {
    super(game, "Wasp Lancer", "Shadowmoor", "SHM");
  }
}

module.exports = WaspLancer;
