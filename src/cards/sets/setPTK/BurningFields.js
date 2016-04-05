"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class BurningFields extends UnimplementedCard {
  constructor(game) {
    super(game, "Burning Fields", "Portal Three Kingdoms", "PTK");
  }
}

module.exports = BurningFields;
