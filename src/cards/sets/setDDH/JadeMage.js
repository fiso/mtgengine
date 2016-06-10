"use strict";
const Constants = require ("../../../Constants");
const JadeMageBase = require("../setC13/JadeMage");

class JadeMage extends JadeMageBase {
  constructor (game) {
    super(game, "Jade Mage", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = JadeMage;
