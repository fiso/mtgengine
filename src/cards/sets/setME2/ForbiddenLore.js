"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ForbiddenLore extends UnimplementedCard {
  constructor (game) {
    super(game, "Forbidden Lore", "Masters Edition II", "ME2");
  }
}

module.exports = ForbiddenLore;
