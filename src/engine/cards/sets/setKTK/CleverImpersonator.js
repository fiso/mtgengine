"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class CleverImpersonator extends UnimplementedCard {
  constructor (game) {
    super(game, "Clever Impersonator", "Khans of Tarkir", "KTK");
  }
}

module.exports = CleverImpersonator;
