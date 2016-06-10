"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WithengarUnbound extends UnimplementedCard {
  constructor (game) {
    super(game, "Withengar Unbound", "Dark Ascension", "DKA");
  }
}

module.exports = WithengarUnbound;
