"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WojekApothecary extends UnimplementedCard {
  constructor(game) {
    super(game, "Wojek Apothecary", "Ravnica: City of Guilds", "RAV");
  }
}

module.exports = WojekApothecary;
