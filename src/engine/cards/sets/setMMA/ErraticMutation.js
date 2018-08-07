"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ErraticMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Erratic Mutation", "Modern Masters", "MMA");
  }
}

module.exports = ErraticMutation;
