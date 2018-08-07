"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BastionInventor extends UnimplementedCard {
  constructor (game) {
    super(game, "Bastion Inventor", "Aether Revolt", "AER");
  }
}

module.exports = BastionInventor;
