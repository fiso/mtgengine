"use strict";
const Constants = require ("../../../Constants");
const ForbiddenLoreBase = require("../setME2/ForbiddenLore");

class ForbiddenLore extends ForbiddenLoreBase {
  constructor (game) {
    super(game, "Forbidden Lore", "Ice Age", "ICE");
  }
}

module.exports = ForbiddenLore;
