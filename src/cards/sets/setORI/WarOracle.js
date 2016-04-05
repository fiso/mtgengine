"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WarOracle extends UnimplementedCard {
  constructor(game) {
    super(game, "War Oracle", "Magic Origins", "ORI");
  }
}

module.exports = WarOracle;
