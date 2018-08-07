"use strict";
const Constants = require ("../../../Constants");
const IntrepidHeroBase = require("../setM13/IntrepidHero");

class IntrepidHero extends IntrepidHeroBase {
  constructor (game) {
    super(game, "Intrepid Hero", "Eighth Edition", "8ED");
  }
}

module.exports = IntrepidHero;
