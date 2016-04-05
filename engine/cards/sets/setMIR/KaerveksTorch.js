"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KaerveksTorch extends UnimplementedCard {
  constructor(game) {
    super(game, "Kaervek's Torch", "Mirage", "MIR");
  }
}

module.exports = KaerveksTorch;
