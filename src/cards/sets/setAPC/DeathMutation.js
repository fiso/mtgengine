"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DeathMutation extends UnimplementedCard {
  constructor(game) {
    super(game, "Death Mutation", "Apocalypse", "APC");
  }
}

module.exports = DeathMutation;
