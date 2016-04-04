"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WojekSiren extends Card {
  constructor(game) {
    super(game, "Wojek Siren", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WojekSiren;
