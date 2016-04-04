"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RummagingGoblin extends Card {
  constructor(game) {
    super(game, "Rummaging Goblin", "Magic 2013", "M13");
  }
}

module.exports = RummagingGoblin;
