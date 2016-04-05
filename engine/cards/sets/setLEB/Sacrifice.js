"use strict";
const Constants = require ("../../../Constants");
const SacrificeBase = require("../setCED/Sacrifice");

class Sacrifice extends SacrificeBase {
  constructor(game) {
    super(game, "Sacrifice", "Limited Edition Beta", "LEB");
  }
}

module.exports = Sacrifice;
