"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BecauseIHaveWilledIt extends UnimplementedCard {
  constructor (game) {
    super(game, "Because I Have Willed It", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = BecauseIHaveWilledIt;
