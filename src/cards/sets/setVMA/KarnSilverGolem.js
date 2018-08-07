"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KarnSilverGolem extends UnimplementedCard {
  constructor (game) {
    super(game, "Karn, Silver Golem", "Vintage Masters", "VMA");
  }
}

module.exports = KarnSilverGolem;
