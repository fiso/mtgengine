"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PackRat extends UnimplementedCard {
  constructor(game) {
    super(game, "Pack Rat", "Return to Ravnica", "RTR");
  }
}

module.exports = PackRat;
