"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TundraKavu extends Card {
  constructor(game) {
    super(game, "Tundra Kavu", "Apocalypse", "APC");
  }
}

module.exports = TundraKavu;
