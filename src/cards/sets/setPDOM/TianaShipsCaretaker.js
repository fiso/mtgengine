"use strict";
const Constants = require ("../../../Constants");
const TianaShipsCaretakerBase = require("../setDOM/TianaShipsCaretaker");

class TianaShipsCaretaker extends TianaShipsCaretakerBase {
  constructor (game) {
    super(game, "Tiana, Ship's Caretaker", "Dominaria Promos", "PDOM");
  }
}

module.exports = TianaShipsCaretaker;
