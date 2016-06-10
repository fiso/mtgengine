"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor (game) {
    super(game, "Tranquil Thicket", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = TranquilThicket;
