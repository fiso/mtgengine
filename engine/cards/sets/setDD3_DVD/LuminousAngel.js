"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class LuminousAngel extends Card {
  constructor(game) {
    super(game, "Luminous Angel", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = LuminousAngel;
