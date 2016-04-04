"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class DryadsCaress extends Card {
  constructor(game) {
    super(game, "Dryad's Caress", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DryadsCaress;
