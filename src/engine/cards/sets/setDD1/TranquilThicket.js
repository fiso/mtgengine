"use strict";
const Constants = require ("../../../Constants");
const TranquilThicketBase = require("../setC18/TranquilThicket");

class TranquilThicket extends TranquilThicketBase {
  constructor (game) {
    super(game, "Tranquil Thicket", "Duel Decks: Elves vs. Goblins", "DD1");
  }
}

module.exports = TranquilThicket;
