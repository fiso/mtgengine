"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Death Mutation", "Commander 2011", "CMD");
  }
}

module.exports = DeathMutation;
