"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BlessedReversal extends UnimplementedCard {
  constructor (game) {
    super(game, "Blessed Reversal", "Eighth Edition", "8ED");
  }
}

module.exports = BlessedReversal;
