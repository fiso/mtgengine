"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class JeskaiElder extends Card {
  constructor(game) {
    super(game, "Jeskai Elder", "Duel Decks: Speed vs. Cunning", "DDN");
  }
}

module.exports = JeskaiElder;
