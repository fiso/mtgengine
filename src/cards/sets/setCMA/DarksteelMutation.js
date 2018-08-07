"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class DarksteelMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Darksteel Mutation", "Commander Anthology", "CMA");
  }
}

module.exports = DarksteelMutation;
