"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class Blistergrub extends UnimplementedCard {
  constructor (game) {
    super(game, "Blistergrub", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = Blistergrub;
