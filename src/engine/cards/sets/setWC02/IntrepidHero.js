"use strict";
const Constants = require ("../../../Constants");
const IntrepidHeroBase = require("../setM13/IntrepidHero");

class IntrepidHero extends IntrepidHeroBase {
  constructor (game) {
    super(game, "Intrepid Hero", "World Championship Decks 2002", "WC02");
  }
}

module.exports = IntrepidHero;
