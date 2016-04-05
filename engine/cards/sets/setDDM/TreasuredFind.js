"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class TreasuredFind extends UnimplementedCard {
  constructor(game) {
    super(game, "Treasured Find", "Duel Decks: Jace vs. Vraska", "DDM");
  }
}

module.exports = TreasuredFind;
