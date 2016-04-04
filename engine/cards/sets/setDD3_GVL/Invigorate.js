"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Invigorate extends Card {
  constructor(game) {
    super(game, "Invigorate", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Invigorate;
