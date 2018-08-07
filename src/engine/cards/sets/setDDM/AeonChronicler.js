"use strict";
const Constants = require ("../../../Constants");
const AeonChroniclerBase = require("../setC16/AeonChronicler");

class AeonChronicler extends AeonChroniclerBase {
  constructor (game) {
    super(game, "Aeon Chronicler", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = AeonChronicler;
