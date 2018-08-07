"use strict";
const Constants = require ("../../../Constants");
const MerfolkSovereignBase = require("../setE02/MerfolkSovereign");

class MerfolkSovereign extends MerfolkSovereignBase {
  constructor (game) {
    super(game, "Merfolk Sovereign", "Duel Decks: Merfolk vs. Goblins", "DDT");
  }
}

module.exports = MerfolkSovereign;
