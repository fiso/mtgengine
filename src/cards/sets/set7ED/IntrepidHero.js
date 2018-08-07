"use strict";
const Constants = require ("../../../Constants");
const IntrepidHeroBase = require("../setM13/IntrepidHero");

class IntrepidHero extends IntrepidHeroBase {
  constructor (game) {
    super(game, "Intrepid Hero", "Seventh Edition", "7ED");
  }
}

module.exports = IntrepidHero;
