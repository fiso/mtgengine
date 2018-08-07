"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class EldraziScion extends UnimplementedCard {
  constructor (game) {
    super(game, "Eldrazi Scion", "Duel Decks: Nissa vs. Ob Nixilis", "DDR");
  }
}

module.exports = EldraziScion;
