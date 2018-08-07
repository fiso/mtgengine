"use strict";
const Constants = require ("../../../Constants");
const DeathbringerRegentBase = require("../setC17/DeathbringerRegent");

class DeathbringerRegent extends DeathbringerRegentBase {
  constructor (game) {
    super(game, "Deathbringer Regent", "Archenemy: Nicol Bolas", "E01");
  }
}

module.exports = DeathbringerRegent;
