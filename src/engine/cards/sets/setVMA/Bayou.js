"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Bayou extends UnimplementedCard {
  constructor (game) {
    super(game, "Bayou", "Vintage Masters", "VMA");
  }
}

module.exports = Bayou;
