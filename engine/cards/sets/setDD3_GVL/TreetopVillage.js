"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class TreetopVillage extends Card {
  constructor(game) {
    super(game, "Treetop Village", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = TreetopVillage;
