"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class AstralArena extends UnimplementedCard {
  constructor (game) {
    super(game, "Astral Arena", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = AstralArena;
