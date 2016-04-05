"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class HorncallersChant extends UnimplementedCard {
  constructor(game) {
    super(game, "Horncaller's Chant", "Return to Ravnica", "RTR");
  }
}

module.exports = HorncallersChant;
