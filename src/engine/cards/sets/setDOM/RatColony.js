"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class RatColony extends UnimplementedCard {
  constructor (game) {
    super(game, "Rat Colony", "Dominaria", "DOM");
  }
}

module.exports = RatColony;
