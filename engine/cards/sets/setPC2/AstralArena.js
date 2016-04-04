"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class AstralArena extends Card {
  constructor(game) {
    super(game, "Astral Arena", "Planechase 2012 Edition", "PC2");
  }
}

module.exports = AstralArena;
