"use strict";
const Constants = require ("../../../Constants");
const AstralArenaBase = require("../setPCA/AstralArena");

class AstralArena extends AstralArenaBase {
  constructor (game) {
    super(game, "Astral Arena", "Planechase 2012", "PC2");
  }
}

module.exports = AstralArena;
