"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");
const JadeMageBase = require("../setC13/JadeMage.js");

class JadeMage extends JadeMageBase {
  constructor(game) {
    super(game, "Jade Mage", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = JadeMage;
