"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class UnholyHunger extends UnimplementedCard {
  constructor(game) {
    super(game, "Unholy Hunger", "Magic Origins", "ORI");
  }
}

module.exports = UnholyHunger;
