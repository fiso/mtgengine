"use strict";
const Constants = require ("../../../Constants");
const WindreaverBase = require("../setDIS/Windreaver");

class Windreaver extends WindreaverBase {
  constructor (game) {
    super(game, "Windreaver", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = Windreaver;
