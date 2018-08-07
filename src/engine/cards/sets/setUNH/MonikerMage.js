"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MonikerMage extends UnimplementedCard {
  constructor (game) {
    super(game, "Moniker Mage", "Unhinged", "UNH");
  }
}

module.exports = MonikerMage;
