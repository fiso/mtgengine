"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Phytohydra extends Card {
  constructor(game) {
    super(game, "Phytohydra", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = Phytohydra;
