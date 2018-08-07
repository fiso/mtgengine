"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgentMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Argent Mutation", "New Phyrexia", "NPH");
  }
}

module.exports = ArgentMutation;
