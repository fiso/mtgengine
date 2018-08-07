"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ScytheLeopard extends UnimplementedCard {
  constructor (game) {
    super(game, "Scythe Leopard", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = ScytheLeopard;
