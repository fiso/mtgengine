"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ElvenCache extends UnimplementedCard {
  constructor(game) {
    super(game, "Elven Cache", "Classic Sixth Edition", "6ED");
  }
}

module.exports = ElvenCache;
