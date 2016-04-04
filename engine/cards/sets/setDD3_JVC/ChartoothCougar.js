"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class ChartoothCougar extends Card {
  constructor(game) {
    super(game, "Chartooth Cougar", "Duel Decks Anthology, Jace vs. Chandra", "DD3_JVC");
  }
}

module.exports = ChartoothCougar;
