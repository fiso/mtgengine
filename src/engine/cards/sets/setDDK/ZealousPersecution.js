"use strict";
const Constants = require ("../../../Constants");
const ZealousPersecutionBase = require("../setE02/ZealousPersecution");

class ZealousPersecution extends ZealousPersecutionBase {
  constructor (game) {
    super(game, "Zealous Persecution", "Duel Decks: Sorin vs. Tibalt", "DDK");
  }
}

module.exports = ZealousPersecution;
