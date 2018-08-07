"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WojekEmbermage extends UnimplementedCard {
  constructor (game) {
    super(game, "Wojek Embermage", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WojekEmbermage;
