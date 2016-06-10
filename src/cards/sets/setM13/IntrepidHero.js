"use strict";
const Constants = require ("../../../Constants");
const IntrepidHeroBase = require("../set8ED/IntrepidHero");

class IntrepidHero extends IntrepidHeroBase {
  constructor (game) {
    super(game, "Intrepid Hero", "Magic 2013", "M13");
  }
}

module.exports = IntrepidHero;
