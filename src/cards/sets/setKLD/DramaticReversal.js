"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DramaticReversal extends UnimplementedCard {
  constructor (game) {
    super(game, "Dramatic Reversal", "Kaladesh", "KLD");
  }
}

module.exports = DramaticReversal;
