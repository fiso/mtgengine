"use strict";
const Constants = require ("../../../Constants");
const UnimplementedCard = require("../../UnimplementedCard");

class PygmyPyrosaur extends UnimplementedCard {
  constructor (game) {
    super(game, "Pygmy Pyrosaur", "Duel Decks: Venser vs. Koth", "DDI");
  }
}

module.exports = PygmyPyrosaur;
