"use strict";
const Constants = require ("../../../Constants");
const MarkovDreadknightBase = require("../setSOI/MarkovDreadknight");

class MarkovDreadknight extends MarkovDreadknightBase {
  constructor (game) {
    super(game, "Markov Dreadknight", "Magic Online Promos", "PRM");
  }
}

module.exports = MarkovDreadknight;
