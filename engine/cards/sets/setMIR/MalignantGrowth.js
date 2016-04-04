"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MalignantGrowth extends UnimplementedCard {
  constructor(game) {
    super(game, "Malignant Growth", "Mirage", "MIR");
  }
}

module.exports = MalignantGrowth;
