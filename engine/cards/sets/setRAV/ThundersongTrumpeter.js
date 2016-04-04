"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ThundersongTrumpeter extends Card {
  constructor(game) {
    super(game, "Thundersong Trumpeter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ThundersongTrumpeter;
