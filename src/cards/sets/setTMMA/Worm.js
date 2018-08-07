"use strict";
const Constants = require ("../../../Constants");
const WormBase = require("../setTC18/Worm");

class Worm extends WormBase {
  constructor (game) {
    super(game, "Worm", "Modern Masters Tokens", "TMMA");
  }
}

module.exports = Worm;
