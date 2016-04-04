"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class FatalLore extends Card {
  constructor(game) {
    super(game, "Fatal Lore", "Alliances", "ALL");
  }
}

module.exports = FatalLore;
