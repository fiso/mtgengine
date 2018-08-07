"use strict";
const Constants = require ("../../../Constants");
const LyraDawnbringerBase = require("../setDOM/LyraDawnbringer");

class LyraDawnbringer extends LyraDawnbringerBase {
  constructor (game) {
    super(game, "Lyra Dawnbringer", "Dominaria Promos", "PDOM");
  }
}

module.exports = LyraDawnbringer;
