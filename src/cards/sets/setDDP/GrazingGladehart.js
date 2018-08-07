"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GrazingGladehart extends UnimplementedCard {
  constructor (game) {
    super(game, "Grazing Gladehart", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = GrazingGladehart;
