"use strict";
const Constants = require ("../../../Constants");
const CadaverImpBase = require("../setPCA/CadaverImp");

class CadaverImp extends CadaverImpBase {
  constructor (game) {
    super(game, "Cadaver Imp", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = CadaverImp;
