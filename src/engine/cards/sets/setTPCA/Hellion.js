"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Hellion extends UnimplementedCard {
  constructor (game) {
    super(game, "Hellion", "Planechase Anthology Tokens", "TPCA");
  }
}

module.exports = Hellion;
