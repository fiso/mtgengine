"use strict";
const Constants = require ("../../../Constants");
const KnightoftheWhiteOrchidBase = require("../setPORI/KnightoftheWhiteOrchid");

class KnightoftheWhiteOrchid extends KnightoftheWhiteOrchidBase {
  constructor (game) {
    super(game, "Knight of the White Orchid", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = KnightoftheWhiteOrchid;
