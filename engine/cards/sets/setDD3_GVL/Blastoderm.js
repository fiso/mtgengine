"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Blastoderm extends Card {
  constructor(game) {
    super(game, "Blastoderm", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Blastoderm;
