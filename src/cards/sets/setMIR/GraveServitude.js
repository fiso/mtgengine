"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GraveServitude extends UnimplementedCard {
  constructor(game) {
    super(game, "Grave Servitude", "Mirage", "MIR");
  }
}

module.exports = GraveServitude;
