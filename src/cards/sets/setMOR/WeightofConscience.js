"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class WeightofConscience extends UnimplementedCard {
  constructor(game) {
    super(game, "Weight of Conscience", "Morningtide", "MOR");
  }
}

module.exports = WeightofConscience;
