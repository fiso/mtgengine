"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RootingKavu extends Card {
  constructor(game) {
    super(game, "Rooting Kavu", "Invasion", "INV");
  }
}

module.exports = RootingKavu;
