"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KragmaButcher extends UnimplementedCard {
  constructor (game) {
    super(game, "Kragma Butcher", "Born of the Gods", "BNG");
  }
}

module.exports = KragmaButcher;
