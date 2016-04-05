"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GuiltyConscience extends UnimplementedCard {
  constructor(game) {
    super(game, "Guilty Conscience", "Scourge", "SCG");
  }
}

module.exports = GuiltyConscience;
