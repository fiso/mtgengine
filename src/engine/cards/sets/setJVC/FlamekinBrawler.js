"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class FlamekinBrawler extends UnimplementedCard {
  constructor (game) {
    super(game, "Flamekin Brawler", "Duel Decks Anthology: Jace vs. Chandra", "JVC");
  }
}

module.exports = FlamekinBrawler;
