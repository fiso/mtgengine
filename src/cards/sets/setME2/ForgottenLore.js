"use strict";
const Constants = require ("../../../Constants");
const ForgottenLoreBase = require("../setICE/ForgottenLore");

class ForgottenLore extends ForgottenLoreBase {
  constructor(game) {
    super(game, "Forgotten Lore", "Masters Edition II", "ME2");
  }
}

module.exports = ForgottenLore;
