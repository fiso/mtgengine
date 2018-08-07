"use strict";
const Constants = require ("../../../Constants");
const JungleShrineBase = require("../setE02/JungleShrine");

class JungleShrine extends JungleShrineBase {
  constructor (game) {
    super(game, "Jungle Shrine", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = JungleShrine;
