"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KeldonHalberdier extends UnimplementedCard {
  constructor (game) {
    super(game, "Keldon Halberdier", "Iconic Masters", "IMA");
  }
}

module.exports = KeldonHalberdier;
