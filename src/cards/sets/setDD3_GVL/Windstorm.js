"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Windstorm extends UnimplementedCard {
  constructor (game) {
    super(game, "Windstorm", "Duel Decks Anthology, Garruk vs. Liliana", "DD3_GVL");
  }
}

module.exports = Windstorm;
