"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class SnuffOut extends Card {
  constructor(game) {
    super(game, "Snuff Out", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = SnuffOut;
