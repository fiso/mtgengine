"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class MalignantGrowth extends Card {
  constructor(game) {
    super(game, "Malignant Growth", "Mirage", "MIR");
  }
}

module.exports = MalignantGrowth;
