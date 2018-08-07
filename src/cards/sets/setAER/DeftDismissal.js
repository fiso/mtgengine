"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeftDismissal extends UnimplementedCard {
  constructor (game) {
    super(game, "Deft Dismissal", "Aether Revolt", "AER");
  }
}

module.exports = DeftDismissal;
