"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class LeeringGargoyle extends UnimplementedCard {
  constructor(game) {
    super(game, "Leering Gargoyle", "Mirage", "MIR");
  }
}

module.exports = LeeringGargoyle;
