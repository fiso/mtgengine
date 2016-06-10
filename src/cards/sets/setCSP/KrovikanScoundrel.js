"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KrovikanScoundrel extends UnimplementedCard {
  constructor (game) {
    super(game, "Krovikan Scoundrel", "Coldsnap", "CSP");
  }
}

module.exports = KrovikanScoundrel;
