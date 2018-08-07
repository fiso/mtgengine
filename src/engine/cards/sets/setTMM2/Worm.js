"use strict";
const Constants = require ("../../../Constants");
const WormBase = require("../setTC18/Worm");

class Worm extends WormBase {
  constructor (game) {
    super(game, "Worm", "Modern Masters 2015 Tokens", "TMM2");
  }
}

module.exports = Worm;
