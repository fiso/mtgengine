"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Immerwolf extends UnimplementedCard {
  constructor(game) {
    super(game, "Immerwolf", "Dark Ascension", "DKA");
  }
}

module.exports = Immerwolf;
