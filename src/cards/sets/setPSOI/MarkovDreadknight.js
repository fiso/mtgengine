"use strict";
const Constants = require ("../../../Constants");
const MarkovDreadknightBase = require("../setSOI/MarkovDreadknight");

class MarkovDreadknight extends MarkovDreadknightBase {
  constructor (game) {
    super(game, "Markov Dreadknight", "Shadows over Innistrad Promos", "PSOI");
  }
}

module.exports = MarkovDreadknight;
