"use strict";
const Card = require("../../objects/Card");
const Constants = require ("../../Constants");

class Windstorm extends Card {
  constructor(game) {
    super(game, "Windstorm", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Windstorm;
