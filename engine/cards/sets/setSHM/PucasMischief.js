"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class PucasMischief extends Card {
  constructor(game) {
    super(game, "Puca's Mischief", "Shadowmoor", "SHM");
  }
}

module.exports = PucasMischief;
