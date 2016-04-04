"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RainofEmbers extends Card {
  constructor(game) {
    super(game, "Rain of Embers", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = RainofEmbers;
