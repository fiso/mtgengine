"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WojekSiren extends UnimplementedCard {
  constructor (game) {
    super(game, "Wojek Siren", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WojekSiren;
