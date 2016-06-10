"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherMutation extends UnimplementedCard {
  constructor (game) {
    super(game, "Æther Mutation", "Apocalypse", "APC");
  }
}

module.exports = AetherMutation;
