"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class ArgivianRestoration extends UnimplementedCard {
  constructor(game) {
    super(game, "Argivian Restoration", "Duel Decks: Elspeth vs. Tezzeret", "DDF");
  }
}

module.exports = ArgivianRestoration;
