"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class WirewoodSavage extends Card {
  constructor(game) {
    super(game, "Wirewood Savage", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = WirewoodSavage;
