"use strict";
const Constants = require ("../../../Constants");
const SacrificeBase = require("../setSUM/Sacrifice");

class Sacrifice extends SacrificeBase {
  constructor (game) {
    super(game, "Sacrifice", "Limited Edition Alpha", "LEA");
  }
}

module.exports = Sacrifice;
