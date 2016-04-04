"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WojekEmbermage extends Card {
  constructor(game) {
    super(game, "Wojek Embermage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WojekEmbermage;
