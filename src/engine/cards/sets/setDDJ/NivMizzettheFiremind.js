"use strict";
const Constants = require ("../../../Constants");
const NivMizzettheFiremindBase = require("../setA25/NivMizzettheFiremind");

class NivMizzettheFiremind extends NivMizzettheFiremindBase {
  constructor (game) {
    super(game, "Niv-Mizzet, the Firemind", "Duel Decks: Izzet vs. Golgari", "DDJ");
  }
}

module.exports = NivMizzettheFiremind;
