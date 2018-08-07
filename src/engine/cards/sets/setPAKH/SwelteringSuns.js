"use strict";
const Constants = require ("../../../Constants");
const SwelteringSunsBase = require("../setAKH/SwelteringSuns");

class SwelteringSuns extends SwelteringSunsBase {
  constructor (game) {
    super(game, "Sweltering Suns", "Amonkhet Promos", "PAKH");
  }
}

module.exports = SwelteringSuns;
