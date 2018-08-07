"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariGermination extends UnimplementedCard {
  constructor (game) {
    super(game, "Golgari Germination", "Modern Masters 2017", "MM3");
  }
}

module.exports = GolgariGermination;
