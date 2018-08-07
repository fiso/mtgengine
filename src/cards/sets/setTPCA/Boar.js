"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Boar extends UnimplementedCard {
  constructor (game) {
    super(game, "Boar", "Planechase Anthology Tokens", "TPCA");
  }
}

module.exports = Boar;
