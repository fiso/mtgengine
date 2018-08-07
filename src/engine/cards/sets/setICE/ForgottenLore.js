"use strict";
const Constants = require ("../../../Constants");
const ForgottenLoreBase = require("../setME2/ForgottenLore");

class ForgottenLore extends ForgottenLoreBase {
  constructor (game) {
    super(game, "Forgotten Lore", "Ice Age", "ICE");
  }
}

module.exports = ForgottenLore;
