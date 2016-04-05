"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SilkwingScout extends UnimplementedCard {
  constructor(game) {
    super(game, "Silkwing Scout", "Dissension", "DIS");
  }
}

module.exports = SilkwingScout;
