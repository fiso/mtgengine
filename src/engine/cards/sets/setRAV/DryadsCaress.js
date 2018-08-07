"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DryadsCaress extends UnimplementedCard {
  constructor (game) {
    super(game, "Dryad's Caress", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = DryadsCaress;
