"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TowerGeist extends UnimplementedCard {
  constructor (game) {
    super(game, "Tower Geist", "Duel Decks: Blessed vs. Cursed", "DDQ");
  }
}

module.exports = TowerGeist;
