"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class SatyrHedonist extends UnimplementedCard {
  constructor(game) {
    super(game, "Satyr Hedonist", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = SatyrHedonist;
