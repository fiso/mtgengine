"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Vengevine extends UnimplementedCard {
  constructor (game) {
    super(game, "Vengevine", "World Magic Cup Qualifiers", "PWCQ");
  }
}

module.exports = Vengevine;
