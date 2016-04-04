"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RagingKavu extends Card {
  constructor(game) {
    super(game, "Raging Kavu", "Invasion", "INV");
  }
}

module.exports = RagingKavu;
