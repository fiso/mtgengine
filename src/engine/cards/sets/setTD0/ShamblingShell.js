"use strict";
const Constants = require ("../../../Constants");
const ShamblingShellBase = require("../setDDJ/ShamblingShell");

class ShamblingShell extends ShamblingShellBase {
  constructor (game) {
    super(game, "Shambling Shell", "Magic Online Theme Decks", "TD0");
  }
}

module.exports = ShamblingShell;
