"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JungleShrineBase = require("../setC13/JungleShrine.js");

class JungleShrine extends JungleShrineBase {
  constructor(game) {
    super(game, "Jungle Shrine", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = JungleShrine;
