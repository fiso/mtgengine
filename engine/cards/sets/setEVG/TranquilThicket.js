"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setARC/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor(game) {
    super(game, "Tranquil Thicket", "Duel Decks: Elves vs. Goblins", "EVG");
  }
}

module.exports = TranquilThicket;
