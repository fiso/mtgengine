"use strict";
const Constants = require ("../../../Constants");
const FromBeyondBase = require("../setBFZ/FromBeyond");

class FromBeyond extends FromBeyondBase {
  constructor (game) {
    super(game, "From Beyond", "Battle for Zendikar Promos", "PBFZ");
  }
}

module.exports = FromBeyond;
