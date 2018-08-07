"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SpontaneousMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Spontaneous Mutation", "Eldritch Moon", "EMN");
  }
}

module.exports = SpontaneousMutation;
