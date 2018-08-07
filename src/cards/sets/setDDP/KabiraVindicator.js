"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class KabiraVindicator extends UnimplementedCard {
  constructor (game) {
    super(game, "Kabira Vindicator", "Duel Decks: Zendikar vs. Eldrazi", "DDP");
  }
}

module.exports = KabiraVindicator;
