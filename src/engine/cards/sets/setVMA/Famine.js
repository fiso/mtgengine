"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Famine extends UnimplementedCard {
  constructor (game) {
    super(game, "Famine", "Vintage Masters", "VMA");
  }
}

module.exports = Famine;
