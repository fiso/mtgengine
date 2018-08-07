"use strict";
const Constants = require ("../../../Constants");
const WormBase = require("../setTC18/Worm");

class Worm extends WormBase {
  constructor (game) {
    super(game, "Worm", "Commander 2016 Tokens", "TC16");
  }
}

module.exports = Worm;
