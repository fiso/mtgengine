"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AncientKavu extends Card {
  constructor(game) {
    super(game, "Ancient Kavu", "Invasion", "INV");
  }
}

module.exports = AncientKavu;
