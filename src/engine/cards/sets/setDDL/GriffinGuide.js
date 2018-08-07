"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class GriffinGuide extends UnimplementedCard {
  constructor (game) {
    super(game, "Griffin Guide", "Duel Decks: Heroes vs. Monsters", "DDL");
  }
}

module.exports = GriffinGuide;
