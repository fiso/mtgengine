"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ThundersongTrumpeter extends UnimplementedCard {
  constructor (game) {
    super(game, "Thundersong Trumpeter", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = ThundersongTrumpeter;
