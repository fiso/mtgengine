"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AetherStorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Aether Storm", "Masters Edition II", "ME2");
  }
}

module.exports = AetherStorm;
