"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Recoil extends Card {
  constructor(game) {
    super(game, "Recoil", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = Recoil;
