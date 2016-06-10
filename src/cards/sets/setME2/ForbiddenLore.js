"use strict";
const Constants = require ("../../../Constants");
const ForbiddenLoreBase = require("../setICE/ForbiddenLore");

class ForbiddenLore extends ForbiddenLoreBase {
  constructor (game) {
    super(game, "Forbidden Lore", "Masters Edition II", "ME2");
  }
}

module.exports = ForbiddenLore;
