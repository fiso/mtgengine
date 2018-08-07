"use strict";
const Constants = require ("../../../Constants");
const ChandraNalaarBase = require("../setJVC/ChandraNalaar");

class ChandraNalaar extends ChandraNalaarBase {
  constructor (game) {
    super(game, "Chandra Nalaar", "Duel Decks: Jace vs. Chandra Japanese Promos", "PDD2");
  }
}

module.exports = ChandraNalaar;
