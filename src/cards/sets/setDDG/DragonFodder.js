"use strict";
const Constants = require ("../../../Constants");
const DragonFodderBase = require("../setMM3/DragonFodder");

class DragonFodder extends DragonFodderBase {
  constructor (game) {
    super(game, "Dragon Fodder", "Duel Decks: Knights vs. Dragons", "DDG");
  }
}

module.exports = DragonFodder;
