"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LilianasCaress extends UnimplementedCard {
  constructor (game) {
    super(game, "Liliana's Caress", "Magic 2011", "M11");
  }
}

module.exports = LilianasCaress;
