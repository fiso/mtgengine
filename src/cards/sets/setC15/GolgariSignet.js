"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GolgariSignet extends UnimplementedCard {
  constructor(game) {
    super(game, "Golgari Signet", "Commander 2015", "C15");
  }
}

module.exports = GolgariSignet;
