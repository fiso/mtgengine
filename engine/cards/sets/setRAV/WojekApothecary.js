"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WojekApothecary extends Card {
  constructor(game) {
    super(game, "Wojek Apothecary", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WojekApothecary;
