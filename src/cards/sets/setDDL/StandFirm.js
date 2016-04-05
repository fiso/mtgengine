"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class StandFirm extends UnimplementedCard {
  constructor(game) {
    super(game, "Stand Firm", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = StandFirm;
