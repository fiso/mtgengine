"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariCharm extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Charm", "Commander 2015", "C15");
  }
}

module.exports = GolgariCharm;
