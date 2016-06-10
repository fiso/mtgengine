"use strict";
const Constants = require ("../../../Constants");
const LordofthePitBase = require("../setCED/LordofthePit");

class LordofthePit extends LordofthePitBase {
  constructor (game) {
    super(game, "Lord of the Pit", "Duel Decks: Divine vs. Demonic", "DDC");
  }
}

module.exports = LordofthePit;
