"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SapphireCharm extends UnimplementedCard {
  constructor (game) {
    super(game, "Sapphire Charm", "Mirage", "MIR");
  }
}

module.exports = SapphireCharm;
