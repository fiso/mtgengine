"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Expunge extends UnimplementedCard {
  constructor (game) {
    super(game, "Expunge", "Vintage Masters", "VMA");
  }
}

module.exports = Expunge;
