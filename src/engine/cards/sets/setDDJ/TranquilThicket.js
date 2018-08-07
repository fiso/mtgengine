"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setC18/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor (game) {
    super(game, "Tranquil Thicket", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = TranquilThicket;
