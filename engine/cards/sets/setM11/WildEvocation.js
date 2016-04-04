"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WildEvocation extends UnimplementedCard {
  constructor(game) {
    super(game, "Wild Evocation", "Magic 2011", "M11");
  }
}

module.exports = WildEvocation;
