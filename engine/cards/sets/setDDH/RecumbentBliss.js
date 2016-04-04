"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class RecumbentBliss extends Card {
  constructor(game) {
    super(game, "Recumbent Bliss", "Duel Decks: Ajani vs. Nicol Bolas", "DDH");
  }
}

module.exports = RecumbentBliss;
