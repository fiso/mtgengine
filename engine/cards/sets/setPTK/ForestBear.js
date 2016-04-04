"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForestBear extends UnimplementedCard {
  constructor(game) {
    super(game, "Forest Bear", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = ForestBear;
