"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class IchorSlick extends Card {
  constructor(game) {
    super(game, "Ichor Slick", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = IchorSlick;
