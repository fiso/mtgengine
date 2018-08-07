"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DerangedHermit extends UnimplementedCard {
  constructor (game) {
    super(game, "Deranged Hermit", "Vintage Masters", "VMA");
  }
}

module.exports = DerangedHermit;
