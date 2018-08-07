"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class MischievousQuanar extends UnimplementedCard {
  constructor (game) {
    super(game, "Mischievous Quanar", "Scourge", "SCG");
  }
}

module.exports = MischievousQuanar;
