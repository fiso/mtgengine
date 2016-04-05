"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Souldrinker extends UnimplementedCard {
  constructor(game) {
    super(game, "Souldrinker", "Duel Decks Anthology, Divine vs. Demonic", "DD3_DVD");
  }
}

module.exports = Souldrinker;
