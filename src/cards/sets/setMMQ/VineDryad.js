"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class VineDryad extends UnimplementedCard {
  constructor (game) {
    super(game, "Vine Dryad", "Mercadian Masques", "MMQ");
  }
}

module.exports = VineDryad;
